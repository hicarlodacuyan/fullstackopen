import { CourseProjectPart } from "../../types"

const GroupProject = ({ course }: { course: CourseProjectPart }) => {
  return (
    <li>
      <strong>{course.name} {course.exerciseCount}</strong>
      <br />
      Project exercises: {course.groupProjectCount}
    </li>
  )
}

export default GroupProject