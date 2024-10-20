import { Route, Routes } from "react-router-dom";
import "./App.css";
import { route } from "./route/route";

function App() {
  return (
    <>
      <Routes>
        {route.map((item, i) => (
          <Route key={i} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
