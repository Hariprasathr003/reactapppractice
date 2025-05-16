import Dynamicdatastore from "./Dynamicdatastore";
import { data } from "../cricketdata";
import "./css/Cricket.css";
export function Cricketplayer() {
  return (
    <>
    
      <h1>Cricket Players</h1>

      {/* <ul>
    <Dynamicdatastore
          image={data[0].image}
          name={data[0].name}
          iplteam={data[0].iplteam}
        />

        <Dynamicdatastore {...data[0]} />
        <Dynamicdatastore {...data[1]} />
        <Dynamicdatastore {...data[2]} />
      </ul> */}

      <ul className="cricketlist">
        {data.map((val, index) => (
          <Dynamicdatastore key={index} {...val} />
        ))}
      </ul>

    </>
  );
}
