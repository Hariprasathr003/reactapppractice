import "./App.css";
import Accordion from "./challenges/Accordion";
import { accordionData } from "./challenges/DataAccortion";
import Maxcount from "./challenges/Maxcount";
import ProgressBar from "./challenges/ProgressBar";
import ShowhideChallenge from "./challenges/ShowhideChallenge";
import Stopwatch from "./challenges/Stopwatch";
import SubmitFormData from "./challenges/SubmitFormData";
import TodoList from "./challenges/TodoList";

function App() {
  return (
    <>
      <ShowhideChallenge />
      <Stopwatch />
      <TodoList />
      <div>
        <h1>ProgressBar</h1>
        <ProgressBar bgcolor="orange" progress="40" height={20} />
        <ProgressBar bgcolor="red" progress="60" height={20} />
        <ProgressBar bgcolor="blue" progress="80" height={20} />
        <ProgressBar bgcolor="green" progress="90" height={20} />
      </div>
      <SubmitFormData />
      <Maxcount />

      <div>
        <h1>Accordion</h1>
        <div>
          {accordionData.map((val) => (
            <Accordion key={val.id} title={val.title} content={val.content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
