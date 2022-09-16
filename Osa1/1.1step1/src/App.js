/*   //const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14  */

const Header = ({course}) => {
  
  return (    
    <h1>{course}</h1>
  )
}

/* const Part = (props) => {
  
  return (
    <div>
    <p>
      {props.part} {props.exercises}
    </p>
    </div>
  )
} */


const Content = ({data1, data2, data3}) => {
  return (
    <div>
      <p>
        {data1.name} {data1.exercises}
      </p>
      <p>
        {data2.name} {data2.exercises}
      </p>
      <p>
        {data3.name} {data3.exercises}
      </p>
      
      {/* <Part 
        part={part1}
        exercises={exercises1}
      />
      <Part 
        part={part2}
        exercises={exercises2}
      />
      <Part 
        part={part3}
        exercises={exercises3}
      /> */}

    </div>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <div>
      <p>Number of exercises {exercises1.exercises + exercises2.exercises + exercises3.exercises}</p>
    </div>
  )
}

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        data1={part1}
        data2= {part2}
        data3= {part3}
      />
      <Total 
        exercises1={part1}
        exercises2={part2}
        exercises3={part3}
      />
    </div>
  )
}

export default App