import { CourseNormalPart } from "../../types"

const Normal = ({ course }: { course: CourseNormalPart }) => {
  return (
    <li>
      <strong>{course.name} {course.exerciseCount}</strong>
      <br />
      <em>{course.description}</em>
    </li>
  )
}

export default Normal