import React, {  createContext, useState } from "react";
export const Tablectx = createContext({
  tableUer: "",
  editItem: (id) => {},
  removeItem: (id) => {},
});
const Tabledata = ({children}) => {
  const [user, setUser] = useState("");

  function editItem(id) {
    setUser(id);
  }
  function removeItem(id) {
    setUser(id);
  }
  const tableUser = {
    tableUer: user,
    editItem,
    removeItem,
  };
  return <Tablectx.Provider value={tableUser}>{children}</Tablectx.Provider>;
};

export default Tabledata;
