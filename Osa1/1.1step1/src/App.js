const Header = ({course}) => {
  return (    
    <h1>{course}</h1>
  )
}

const Content = ({course}) => {
  
  return course.parts.map(item => (
    <div>
      <p>{item.name} {item.exercises}</p>        
    </div>
  )) 
}

const Total = ({course}) => {
  const sumall = course.parts.map(part => part.exercises).reduce((prev, curr) => prev + curr, 0);
  return (
    <div>
      <p>Number of exercises {sumall}</p>
    </div>
  )
}

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content 
        course={course}
      />
      <Total 
        course={course}
      />
    </div>
  )
}

export default App