const Header = ({ course }) => <h1>{course.name}</h1>;

const Total = ({ sum }) => <p>total of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

/* const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => {
      return (
        <div key={part.id}>
          <p>
            {part.name} {part.exercises}
          </p>
        </div>
      );
    })}
  </div>
);

const Content1 = ({ course }) => <h1>{course.parts.name[0]}</h1>; */

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Part part={course.parts[0]} />
    <Part part={course.parts[1]} />
    <Part part={course.parts[2]} />
    <Total
      sum={
        course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises
      }
    />
  </div>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
