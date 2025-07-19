export const chartConfig = {
  original: {
    label: "Action actuelle",
    color: "#f34d17",
  },
  alternative: {
    label: "Alternative",
    color: "#D97757",
  },
  difference: {
    label: "Économie CO₂",
    color: "#f34d17",
  },
  reference: {
    label: "Empreinte française",
    color: "#000000",
  },
  objective: {
    label: "Objectif Paris",
    color: "#16a34a",
  },
};

export const getBarColor = (entry: { isReference?: boolean; isObjective?: boolean; [key: string]: unknown }) => {
  if (entry.isReference) return chartConfig.reference.color;
  if (entry.isObjective) return chartConfig.objective.color;
  return chartConfig.difference.color;
};