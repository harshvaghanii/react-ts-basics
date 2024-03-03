import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../typedefs";

const CourseGoalList = ({
    goals,
    onDeleteGoal,
}: {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
}) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        title={goal.title}
                        onDelete={onDeleteGoal}
                        id={goal.id}
                    >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
