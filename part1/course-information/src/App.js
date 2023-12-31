const Header = (props) => {
  return <h1>{props.course}</h1>;
};

function Content(props) {
  return (
    <>
    <Part title={props.part1.title} exercises={props.part1.exercises}/>
    <Part title={props.part2.title} exercises={props.part2.exercises}/>
    <Part title={props.part3.title} exercises={props.part3.exercises}/>
    </>
  );
}

const Part = (props) => {
  return  <p>{props.title} {props.exercises}</p>
}

const Total = (props) => {
  return   <p>Number of exercises {props.total}</p>
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals Of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div className="App">
      <Header course={course} />
      <Content
        part1={{ title: part1, exercises: exercises1 }}
        part2={{ title: part2, exercises: exercises2 }}
        part3={{ title: part3, exercises: exercises3 }}
      />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  );
};

export default App;
