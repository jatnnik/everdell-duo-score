import { CardCategory, CardKind } from "./enums";
import type { CardCategory as ICardCategory, ICard } from "./types";

const allCategories: ICardCategory[] = [
  CardCategory.Destination,
  CardCategory.Governance,
  CardCategory.Production,
  CardCategory.Prosperity,
  CardCategory.Traveler,
];

const noAdditionalPoints = () => 0;

export const cardRegistry = {
  teacher: {
    slug: "teacher",
    name: "Lehrer",
    points: 1,
    category: CardCategory.Destination,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  locomotive: {
    slug: "locomotive",
    name: "Lokomotive",
    points: 2,
    category: CardCategory.Destination,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
  palace: {
    slug: "palace",
    name: "Palast",
    points: 4,
    category: CardCategory.Prosperity,
    kind: CardKind.Building,
    getAdditionalPoints: (town) => {
      // 2 points for each color that is at least 3x in town
      let colorsWithAtLeastThreeCards = allCategories
        .map((category) => town.countByCategory(category))
        .filter((count) => count >= 3).length;

      return colorsWithAtLeastThreeCards * 2;
    },
  },
  "hall-of-records": {
    slug: "hall-of-records",
    name: "Sternwarte",
    points: 3,
    category: CardCategory.Prosperity,
    kind: CardKind.Building,
    getAdditionalPoints: (town) => {
      // 1 point for each governance card
      const governanceCards = town.countByCategory(CardCategory.Governance);

      return governanceCards;
    },
  },
  queen: {
    slug: "queen",
    name: "Königin",
    points: 2,
    category: CardCategory.Prosperity,
    kind: CardKind.Critter,
    getAdditionalPoints: (town) => {
      // 1 point for each critter
      const critters = town.countByKind(CardKind.Critter);

      return critters;
    },
  },
  harbor: {
    slug: "harbor",
    name: "Hafen",
    points: 2,
    category: CardCategory.Production,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
  castle: {
    slug: "castle",
    name: "Schloss",
    points: 3,
    category: CardCategory.Prosperity,
    kind: CardKind.Building,
    getAdditionalPoints: (town) => {
      // 1 point for each building
      const buildings = town.countByKind(CardKind.Building);

      return buildings;
    },
  },
  clocktower: {
    slug: "clocktower",
    name: "Uhrenturm",
    points: 1,
    category: CardCategory.Governance,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
  diplomat: {
    slug: "diplomat",
    name: "Diplomat",
    points: 1,
    category: CardCategory.Governance,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  baker: {
    slug: "baker",
    name: "Bäckerin",
    points: 2,
    category: CardCategory.Production,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  harvester: {
    slug: "harvester",
    name: "Sammlerin",
    points: 2,
    category: CardCategory.Prosperity,
    kind: CardKind.Critter,
    getAdditionalPoints: (town) => town.countByCategory(CardCategory.Production),
  },
  judge: {
    slug: "judge",
    name: "Richterin",
    points: 1,
    category: CardCategory.Governance,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  wall: {
    slug: "wall",
    name: "Immermauer",
    points: 1,
    category: CardCategory.Traveler,
    kind: CardKind.Building,
    getAdditionalPoints: (town) => {
      // 1 point for each building, max. 5
      return Math.min(town.countByKind(CardKind.Building), 5);
    },
  },
  barn: {
    slug: "barn",
    name: "Scheune",
    points: 1,
    category: CardCategory.Production,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
  miller: {
    slug: "miller",
    name: "Müllerin",
    points: 1,
    category: CardCategory.Production,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  ranger: {
    slug: "ranger",
    name: "Waldläufer",
    points: 1,
    category: CardCategory.Traveler,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  architect: {
    slug: "architect",
    name: "Architekt",
    points: 2,
    category: CardCategory.Prosperity,
    kind: CardKind.Critter,
    getAdditionalPoints: (town) => {
      // 2 points for each different resource, max. 4
      const resources = Object.values(town.resources).filter((count) => count > 0).length;

      return resources * 2;
    },
  },
  farmer: {
    slug: "farmer",
    name: "Farmer",
    points: 1,
    category: CardCategory.Production,
    kind: CardKind.Critter,
    getAdditionalPoints: noAdditionalPoints,
  },
  "tea-house": {
    slug: "tea-house",
    name: "Teestube",
    points: 1,
    category: CardCategory.Production,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
  theater: {
    slug: "theater",
    name: "Theater",
    points: 1,
    category: CardCategory.Prosperity,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
  courthouse: {
    slug: "courthouse",
    name: "Gericht",
    points: 1,
    category: CardCategory.Governance,
    kind: CardKind.Building,
    getAdditionalPoints: noAdditionalPoints,
  },
} as const satisfies Record<string, ICard>;
