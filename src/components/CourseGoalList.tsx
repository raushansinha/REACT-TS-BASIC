import { type ReactNode, type FC } from "react"
import CourseGoal from "./CourseGoal"
import { type CourseGoal as CourseGoalType } from "../App"
import InfoBox from "./InfoBox"

type CourseGoalListProps = {
  goals: Array<CourseGoalType>
  onDeleteGoal: (id: number) => void,
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {

  if (goals.length === 0) {
    return <InfoBox mode='hint'>
      You have no course goal yet. Start adding some
    </InfoBox>
  }

  let warningBox: ReactNode;
  if (goals.length > 3) {
    warningBox = (<InfoBox mode='warning' severity='low'>
      You're collecting too many goals.
    </InfoBox>)
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>

  )
}

export default CourseGoalList