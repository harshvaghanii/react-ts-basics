import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
const App = () => {
    return (
        <main>
            <Header image={{ src: goalsImage, alt: "Goals Image here!" }}>
                <h1>Your Course Goals here!</h1>
            </Header>
            <CourseGoal title="Learn React + TS Course">
                <p>Learn it from the ground up children!!</p>
            </CourseGoal>
        </main>
    );
};

export default App;
