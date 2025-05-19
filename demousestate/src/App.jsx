import "./App.css";
import { Count } from "./Component/Count.jsx";
import { Inputtext } from "./Component/Inputtext.jsx";
import { Toggle } from "./Component/Toggle.jsx";
import { Objectstate } from "./Component/Objectstate.jsx";
import { DemoTodoList } from "./Component/DemoTodolist.jsx";
import { Demo } from "./Component/demo.jsx";
import { CheckBox } from "./Component/checkBox.jsx";
import Dropdown from "./Component/Dropdoen.jsx";
import {ArraOfObject, Viewproduct } from "./Component/Arraytask.jsx";
function App() {
  return (
    <>
      <h1>Hooks USESTATE Practice</h1>
      <Count />
      <Inputtext />
      <Toggle />
      <Objectstate />
      <h1>Todo-List</h1>
      <DemoTodoList />
      <Demo />
      <CheckBox />
      <Dropdown />
      <ArraOfObject name={"photo"} price={1000}/>
      <Viewproduct />
    </>
  );
}

export default App;
