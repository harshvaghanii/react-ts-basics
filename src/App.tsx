import "./App.css";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import { CourseGoalType } from "./typedefs";
import NewGoal from "./components/NewGoal";
// End of import

const App = () => {
    const [goals, setGoals] = useState<CourseGoalType[]>([]);

    const handleAddGoal = (goal: string, summary: string) => {
        setGoals((previousGoals) => {
            const newGoal: CourseGoalType = {
                title: goal,
                description: summary,
                id: Math.random(),
            };
            return [...previousGoals, newGoal];
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
                <NewGoal onAddGoal={handleAddGoal} />
            </Header>
            <CourseGoalList
                goals={goals}
                onDeleteGoal={handleDeleteGoal}
            ></CourseGoalList>
        </main>
    );
};

export default App;
