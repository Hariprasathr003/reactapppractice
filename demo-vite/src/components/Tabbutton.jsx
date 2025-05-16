export function Tabbutton({ children, onSelect, isSelected }) {
  console.log(children, "chhhhhhhhhhhh");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
