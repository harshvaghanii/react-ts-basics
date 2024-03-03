import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal: React.RefObject<HTMLInputElement> =
        useRef<HTMLInputElement>(null);
    const summary: React.RefObject<HTMLInputElement> =
        useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredGoal: string = goal.current!.value;
        const enteredDescription: string = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredDescription);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" id="goal" ref={goal} required />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" ref={summary} required />
            </p>
            <button>Add Goal</button>
        </form>
    );
};

export default NewGoal;
