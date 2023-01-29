import { CourseSubmissionPart } from "../../types"

const Submission = ({ course }: { course: CourseSubmissionPart }) => {
  return (
    <li>
      <strong>{course.name} {course.exerciseCount}</strong>
      <br />
      <em>{course.description}</em>
      <br />
      submit to {course.exerciseSubmissionLink}
    </li>
  )
}

export default Submission