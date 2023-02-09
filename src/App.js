import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import LastPage from "./components/LastPage";

import "./App.css";

function App() {
  return (
    <main className="app">
      <SideBar />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/addons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/done" element={<LastPage />} />
      </Routes>
    </main>
  );
}

export default App;
