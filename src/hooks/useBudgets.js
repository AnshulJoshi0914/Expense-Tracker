import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} from "../services/budgetService";

export const useBudgets = () =>
  useQuery({
    queryKey: ["budgets"],
    queryFn: getBudgets,
  });

export const useCreateBudget = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createBudget,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["budgets"],
      });
    },
  });
};

export const useUpdateBudget = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateBudget,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["budgets"],
      });
    },
  });
};

export const useDeleteBudget = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteBudget,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["budgets"],
      });
    },
  });
};