import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Reports from "./pages/Reports";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DashboardLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/transactions" element={<Transactions />} />

          <Route path="/budgets" element={<Budgets />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;