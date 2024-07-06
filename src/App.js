import React, { memo } from "react";

// A simple component that receives a prop and renders it
const MyComponent = ({ name, age }) => {
  console.log("MyComponent re-rendered");
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
};

// Custom comparison function to check previous and next props
const areEqual = (prevProps, nextProps) => {
  // Compare name and age props
  if (prevProps.name === nextProps.name && prevProps.age === nextProps.age) {
    return true; // props are equal, prevent re-render
  }
  return false; // props are not equal, allow re-render
};

// Memoize the component with the custom comparison function
const MemoizedMyComponent = memo(MyComponent, areEqual);

const App = () => {
  const [name, setName] = React.useState("John");
  const [age, setAge] = React.useState(25);

  return (
    <div>
      <button onClick={() => setName(name === "John" ? "Doe" : "John")}>
        Toggle Name
      </button>
      <button onClick={() => setAge(age + 1)}>Increment Age</button>
      <MemoizedMyComponent name={name} age={age} />
    </div>
  );
};

export default App;
