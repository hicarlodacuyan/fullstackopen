import { CoursePart } from "../types";
import Part from "./Part";

const Content = ({ courseParts }: { courseParts: Array<CoursePart> }) => {
  return (
    <ul>
      {courseParts.map((coursePart, index) => <Part key={index} coursePart={coursePart} />)}
    </ul>
  )
}

export default Content