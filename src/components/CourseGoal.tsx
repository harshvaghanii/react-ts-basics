import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
    title: string;
    onDelete: (id: number) => void;
    id: number;
}>;

const CourseGoal = ({ title, onDelete, children, id }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
};

export default CourseGoal;
