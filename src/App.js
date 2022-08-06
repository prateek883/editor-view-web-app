import Header from './Components/Header'
import Menu from './Components/menu'
import Editor from './Components/editor'
import React, { useState, useEffect } from "react";

function App() {
  const [childData, setChildDataa] = useState({});
  const [childData2, setChilddata2] = useState({});

  let setChildData = (data) => {
    setChildDataa(data);
  }

  useEffect(() => {
    setChilddata2(childData);
  }, [childData]);
  return (
    <div className="App">
      <Header />
      <Menu setChildData={setChildData}/>
      <Editor menuData={childData2}/>
    </div>
  );
}

export default App;