import { useState } from "react";

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(true);

  function handleCheck(e) {
    const a = e.target.checked;
    setIsChecked(a);
    // console.log(e, "eeeeeeeeeeeeeee");
  }
  console.log(isChecked, "kkkkk");
  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
    </>
  );
}
