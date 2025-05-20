import "./App.css";
import Counter from "./components/useStatehook/Counter.jsx";
import Card from "./components/useStatehook/Card.jsx";
import Fetchuser from "./components/useEffecthook/Fetchuser.jsx";
import Home from "./components/miniproject/Home.jsx";
import Loginform from "./components/useRefhook/Loginform.jsx";
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

      <Loginform />
    </>
  );
}

export default App;
