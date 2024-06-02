import { type FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({onAddGoal} : NewGoalProps      ) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        // new FormData(event.currentTarget);
        const goalIput = goal.current!.value;
        const summaryInput = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal(goalIput, summaryInput)
    }

    return (
        <form onSubmit={handleSubmit}>
           <p>
            <label htmlFor="goal">Your Goal</label>
            {/* <input id="goal" type="text" name="goal" /> // name required if we use FormData to get input values */}
            <input id="goal" type="text" ref={goal}/>
           </p>
            <p>
                <label htmlFor="summary" >Short Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal;