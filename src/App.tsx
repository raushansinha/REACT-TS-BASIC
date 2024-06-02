import { useState } from "react";
import Header from "./components/Header";
import Goalsjpg from './assets/goals.jpg';
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals(prevState => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevState, newGoal]
    })
  }

  const handleDeleteGoal = (id: number) =>{
    setGoals(prevGoal => prevGoal.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header
        image={{
          src: Goalsjpg,
          alt: 'A list of goals'
        }}
      >
        <h1> Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList 
        goals={goals} 
        onDeleteGoal = {handleDeleteGoal}
      />
    </main>
  )
}
