// import "./App.css";

import CardSet from "./components/demoproject/CardSet.jsx";
import Card from "./components/useStatehook/Card.jsx";
import Fetchuser from "./components/useEffecthook/Fetchuser.jsx";
import Home from "./components/miniproject/Home.jsx";
import Loginform from "./components/useRefhook/Loginform.jsx";
import Withoutcontext from "./components/useContexthook/withoutContext/Withoutcontext.jsx";
import StudentDetails from "./components/useContexthook/withContext/StudentDetails.jsx";
import CountReduce from "./components/useReducer/CountReduce.jsx";
import GlobalContext from "./components/useContexthook/GlobalContext.jsx";
import { ChildContext } from "./components/useContexthook/GlobalContext.jsx";
import CounterCallback from "./components/useCallbackhook/CounterCllaBack.jsx";
import SortingDemo from "./components/useMemo/SortingDemo.jsx";
import SearchData from "./components/useCustomhooks/SearchData.jsx";
import { Counterpractice } from "./components/practicehooks/Counterpractice.jsx";
import { Togglepractice } from "./components/practicehooks/Togglepractice.jsx";
import Todolistpractice from "./components/practicehooks/Todolistpractice.jsx";
import FetchDataApi from "./components/practicehooks/FetchDataApi.jsx";
import Searchbarpractice from "./components/practicehooks/Searchbarpractice.jsx";
import Dropdownpractice from "./components/practicehooks/Dropdownpractice.jsx";
function App() {
  const items = ["Component", "Jsx", "Hooks", "Router", "props"];
  return (
    <>
      {/* <Home />

      <div>
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
      </div>

      <div>
        <h1
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          USEEFFECT EXAMPLES
        </h1>
        <Fetchuser />
      </div>
      <CountReduce />

      <Loginform />
      <Withoutcontext />
      <StudentDetails />

      <GlobalContext />

      <CardSet /> */}

      {/* <CounterCallback />
      <SortingDemo />
      <SearchData /> */}

      <Counterpractice />
      <hr />
      <Togglepractice />
      <hr />
      <Todolistpractice />
      <hr />
      <FetchDataApi />
      <hr />
      <Searchbarpractice />
      <hr />
      <Dropdownpractice items={items} />
    </>
  );
}

export default App;
