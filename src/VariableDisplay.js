import React from "react";

function VariableDisplay(){
    let stringVar = "Welcome to React";
    let numberVar = 123;
    let booleanVar = true;
    let arrayVar = ["React", "JSX","variables"];
    let objectVar = {name:"John", age:30, role:"Developer"};

// Add your conditional statement here
  if (Math.random() > 0.5) {
    stringVar = "Welcome to advanced React";
  }
  const getGreeting = () => {
    return <p>This message is returned from a function!</p>
  };
    return(
        <div className = "variable-display">
            <h1>{stringVar}</h1>
            <p>Number: {numberVar}</p>
            <p>Boolean: {booleanVar.toString()}</p>
            <p>Object Name: {objectVar.name}</p><p>Object Age: {objectVar.age}</p><p>Object Role:{objectVar.role}</p>
            <p>Array: {arrayVar.join(",")}</p>

            {/* Rendering JSX returned from a function*/}
            {getGreeting()}
        </div>
    );
}
  


export  default VariableDisplay;