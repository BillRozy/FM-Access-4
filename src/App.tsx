import { useState } from "react";
import "./App.css";
import Aside1 from "./components/Aside1";
import Aside2 from "./components/Aside2";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header open={isOpen} onOpenChange={setIsOpen}></Header>
      <div
        inert={isOpen ? "true" : undefined}
        className="flex flex-wrap gap-x-[30px] gap-y-800"
      >
        <div className="grow basis-[730px]">
          <Main></Main>
        </div>
        <div className="grow basis-[350px]">
          <Aside1></Aside1>
        </div>
      </div>
      <div inert={isOpen ? "true" : undefined}>
        <Aside2></Aside2>
      </div>
    </>
  );
}

export default App;
