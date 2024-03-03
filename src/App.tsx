import "./App.css";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import { CourseGoalType } from "./typedefs";
// End of import

const App = () => {
    const [goals, setGoals] = useState<CourseGoalType[]>([]);

    const handleAddGoal = () => {
        setGoals((previousGoals) => {
            const newGoal: CourseGoalType = {
                title: "Learn React + TS",
                description: "Learn it in depth!",
                id: Math.random(),
            };
            return [newGoal, ...previousGoals];
        });
    };

    const handleDeleteGoal = (id: number) => {
        setGoals((previousGoals) => {
            return previousGoals.filter((goal) => goal.id !== id);
        });
    };

    return (
        <main>
            <Header image={{ src: goalsImage, alt: "Goals Image here!" }}>
                <h1>Your Course Goals here!</h1>
            </Header>
            <button onClick={handleAddGoal}>Add Goal</button>
            <CourseGoalList
                goals={goals}
                onDeleteGoal={handleDeleteGoal}
            ></CourseGoalList>
        </main>
    );
};

export default App;
