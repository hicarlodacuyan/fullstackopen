import { CoursePart } from "../types"
import GroupProject from "./course_parts/GroupProject";
import Normal from "./course_parts/Normal";
import Special from "./course_parts/Special";
import Submission from "./course_parts/Submission";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  switch (coursePart.type) {
    case "normal":
      return <Normal course={coursePart} />;
    case "groupProject":
      return <GroupProject course={coursePart} />;
    case "submission":
      return <Submission course={coursePart} />;
    case "special":
      return <Special course={coursePart} />;
    default:
      return assertNever(coursePart);
  }
};


export default Part