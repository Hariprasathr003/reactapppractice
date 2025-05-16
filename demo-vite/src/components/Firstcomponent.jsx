import './css/Firstcomponents.css'
const store = ["Dhoni", "Virat", "Raina"];

function randomFUn(val) {
  return Math.floor(Math.random() * (val + 1));
}

export function Firstcomponent() {
  const res = store[randomFUn(2)];
  return (
    <div>
      <h1>
        my favorite cricket player <span className="firstprops">{res}</span>
      </h1>
    </div>
  );
}
