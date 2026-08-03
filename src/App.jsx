import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Reports from "./pages/Reports";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {

  return (

    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />

    <Route path="/signup" element={<Signup />} />

    <Route
      path="/forgot-password"
      element={<ForgotPassword />}
    />

    <Route element={<DashboardLayout />}>

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/transactions" element={<Transactions />} />

      <Route path="/budgets" element={<Budgets />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/categories" element={<Categories />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/support" element={<Support />} />
      <Route path="/forgotpassowrd" element={<ForgotPassword/>}/>

    </Route>

  </Routes>
</BrowserRouter>

  );
}

export default App;