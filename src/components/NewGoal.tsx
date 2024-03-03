import { type FormEvent } from "react";

const NewGoal = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" id="goal" />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" />
            </p>
            <button>Add Goal</button>
        </form>
    );
};

export default NewGoal;
