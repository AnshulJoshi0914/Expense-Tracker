import api from "./api";

export const getBudgets = async () => {
  const { data } = await api.get("/budgets");
  return data;
};

export const createBudget = async (budget) => {
  const { data } = await api.post("/budgets", budget);
  return data;
};

export const updateBudget = async ({ id, budget }) => {
  const { data } = await api.put(`/budgets/${id}`, budget);
  return data;
};

export const deleteBudget = async (id) => {
  const { data } = await api.delete(`/budgets/${id}`);
  return data;
};