import "./App.css";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
const App = () => {
    type CourseGoal = {
        title: string;
        description: string;
        id: number;
    };
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    const handleAddGoal = () => {
        setGoals((previousGoals) => {
            const newGoal: CourseGoal = {
                title: "Learn React + TS",
                description: "Learn it in depth!",
                id: Math.random(),
            };
            return [newGoal, ...previousGoals];
        });
    };

    return (
        <main>
            <Header image={{ src: goalsImage, alt: "Goals Image here!" }}>
                <h1>Your Course Goals here!</h1>
            </Header>
            <button onClick={handleAddGoal}>Add Goal</button>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal title={goal.title}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default App;
