import {type FC, type PropsWithChildren, type ReactNode } from "react";

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void,
}>;


const CourseGoal: FC<CourseGoalProps> = ({id, title, children, onDelete}: CourseGoalProps) => {
    return (<article>
        <div>
            <h1>{title}</h1>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
    )
}

export default CourseGoal;

// export default function CourseGoal({title, children}: CourseGoalProps) {
//     return (<article>
//         <div>
//             <h1>{title}</h1>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>
//     )
// }