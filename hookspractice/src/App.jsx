// import "./App.css";
import Counter from "./components/useStatehook/Counter.jsx";
import Card from "./components/demoproject/Card.jsx";
import Fetchuser from "./components/useEffecthook/Fetchuser.jsx";
import Home from "./components/miniproject/Home.jsx";
import Loginform from "./components/useRefhook/Loginform.jsx";
import Withoutcontext from "./components/useContexthook/withoutContext/Withoutcontext.jsx";
import StudentDetails from "./components/useContexthook/withContext/StudentDetails.jsx";
import CountReduce from "./components/useReducer/CountReduce.jsx";
import GlobalContext from "./components/useContexthook/GlobalContext.jsx";
import { ChildContext } from "./components/useContexthook/GlobalContext.jsx";
function App() {
  return (
    <>
      {/* <Home /> */}

      {/* <div>
      <h1
        style={{
          textAlign: "center",
          color: "blue",
        }}
      >
        USESTATE EXAMPLES
      </h1>
      <Counter />
      <Card />
      </div> */}

      {/* <div>
        <h1
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          USEEFFECT EXAMPLES
        </h1>
        <Fetchuser />
      </div> */}
      {/* <CountReduce /> */}

      {/* <Loginform /> */}
      {/* <Withoutcontext /> */}
      {/* <StudentDetails /> */}
      {/* 
      <ParentComponent /> */}

      {/* <GlobalContext /> */}

      <Card />
    </>
  );
}

export default App;
