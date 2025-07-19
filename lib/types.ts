export interface ClimateAction {
  id: string;
  simpleLabel: string;
  original: {
    emoji: string;
    label: string;
    description: string;
    value: number;
  };
  alternative: {
    emoji: string;
    label: string;
    description: string;
    value: number;
  };
}

export interface SimpleActionData {
  action: string;
  original: number;
  alternative: number;
  difference: number;
  alternativeName: string;
}

export interface DetailedActionData {
  action: string;
  value: number;
  type: "original" | "alternative";
  description: string;
}

export interface ReferenceData {
  action: string;
  original: number;
  alternative: number;
  difference: number;
  alternativeName: string;
  isObjective: boolean;
  group: string;
}