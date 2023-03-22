// import { Counter } from "./components/counter/Counter";

import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Pages";
import { Layout } from "./Layout";
import { DashboardPage } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
