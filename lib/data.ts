import { ClimateAction, SimpleActionData, DetailedActionData, ReferenceData } from "./types";

export const climateActions: ClimateAction[] = [
  {
    id: "transport",
    simpleLabel: "🚂 Train vs ✈️ Avion",
    original: { emoji: "✈️", label: "Avion long-courrier", description: "Vol long-courrier en avion", value: 2300 },
    alternative: { emoji: "🚂", label: "Train 1500km", description: "Trajet en train de 1500km", value: 14 }
  },
  {
    id: "car",
    simpleLabel: "⚡ Voiture électrique",
    original: { emoji: "🚗", label: "Voiture thermique", description: "Voiture essence/diesel (1 an)", value: 1800 },
    alternative: { emoji: "⚡", label: "Voiture électrique", description: "Voiture électrique (1 an)", value: 200 }
  },
  {
    id: "heating",
    simpleLabel: "🌡️ Pompe à chaleur",
    original: { emoji: "🔥", label: "Chauffage gaz", description: "Chauffage au gaz (1 an)", value: 2100 },
    alternative: { emoji: "🌡️", label: "Pompe à chaleur", description: "Pompe à chaleur (1 an)", value: 800 }
  },
  {
    id: "diet",
    simpleLabel: "🥗 Moins de viande",
    original: { emoji: "🥩", label: "Alimentation carnée", description: "Alimentation avec viande quotidienne", value: 1200 },
    alternative: { emoji: "🥗", label: "Alimentation réduite", description: "Alimentation réduite en viande", value: 300 }
  },
  {
    id: "fashion",
    simpleLabel: "♻️ Garde-robe durable",
    original: { emoji: "👕", label: "Garde-robe neuve", description: "Renouvellement annuel garde-robe", value: 600 },
    alternative: { emoji: "♾️", label: "Garde-robe conservée", description: "Garde-robe conservée (3 ans)", value: 200 }
  },
  {
    id: "streaming",
    simpleLabel: "📱 Moins de streaming",
    original: { emoji: "📺", label: "Streaming habituel", description: "Streaming vidéo habituel", value: 120 },
    alternative: { emoji: "📱", label: "Streaming réduit", description: "Streaming réduit (-2h/semaine)", value: 60 }
  }
].sort((a, b) => (b.original.value - b.alternative.value) - (a.original.value - a.alternative.value));

export const referenceData: ReferenceData[] = [
  {
    action: "🎯 Objectif / an Paris 2050",
    original: 2000,
    alternative: 2000,
    difference: 2000,
    alternativeName: "Objectif",
    isObjective: true,
    group: "reference"
  }
];

// Génération automatique des données pour le mode simple
export const getSimpleActionsData = (): SimpleActionData[] => 
  climateActions.map(action => ({
    action: action.simpleLabel,
    original: action.original.value,
    alternative: action.alternative.value,
    difference: action.original.value - action.alternative.value,
    alternativeName: action.alternative.label
  }));

// Génération automatique des données pour le mode détaillé
export const getDetailedActionsData = (): DetailedActionData[] => 
  climateActions.flatMap(action => [
    {
      action: `${action.original.emoji} ${action.original.label}`,
      value: action.original.value,
      type: "original" as const,
      description: action.original.description
    },
    {
      action: `${action.alternative.emoji} ${action.alternative.label}`,
      value: action.alternative.value,
      type: "alternative" as const,
      description: action.alternative.description
    }
  ]);