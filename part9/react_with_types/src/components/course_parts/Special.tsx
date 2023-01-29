import { CourseRequirementPart } from "../../types"

const Special = ({ course }: { course: CourseRequirementPart }) => {
  return (
    <li>
      <strong>{course.name} {course.exerciseCount}</strong>
      <br />
      <em>{course.description}</em>
      <br />
      required skills: {course.requirements.map((req, index) => <span key={index}>{req} </span>)}
    </li>
  )
}

export default Special