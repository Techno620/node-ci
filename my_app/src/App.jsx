import { useState } from "react";
import "./App.css";
import { Todo } from "./todo";
import Welcome from "./class_components";
import FruitsList from "./fruitsList_class";
import EmployeeList from "./EmployeeList";


function App() {
  const [count, setCount] = useState(0);
  const username="Prince Kumar";
  let x=10;
  let y=20;


  return (
    <>
      <div className="min-h-screen flex flex-wrap items-center justify-center bg-gradient-to-br from-amber-100 via-white to-amber-50 p-6 gap-5">

        {/* todo  */}
        <Todo />
        {/* class components */}
        <Welcome />

        {/* fruits list using class */}
        <FruitsList />

        {/* EmployeeList */}
        <EmployeeList />
        <div className="bg-white shadow-lg rounded-2xl max-w-md w-full text-center p-8 border border-amber-200 hover:shadow-xl transition-all duration-300">
          <h1 className="text-3xl font-bold text-amber-700 mb-3 tracking-wide">
            Hello, React 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to your modern React application. Build something amazing!
          </p>
          <button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-full shadow transition duration-300">
            Get Started
          </button>
        </div>
        <div className="p-6  text-center bg-white border-amber-300 border rounded-lg max-w-md w-full shadow-lg hover:shadow-2xl">
          <h1 className="text-3xl tracking-wide text-amber-700 font-bold mb-3">Hi,  {username}</h1>
          {/* <h1>{x+y}</h1>
          <h1>{x*y}</h1> */}
          <p className="text-gray-600 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit distinctio aperiam, eveniet in doloribus fugit rerum dolorem asperiores iste placeat magnam vitae excepturi animi.</p>
          <button onClick={()=>alert("Hello World")} className="rounded-full border bg-amber-500 text-white px-6 py-2 font-medium mt-5 ">Click Here</button>
        </div>
      </div>
    </>
  );
}

export default App;
