import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <div>
        {course.parts.map((part) => {
          return <Content key={part.id} part={part} />;
        })}
      </div>
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
