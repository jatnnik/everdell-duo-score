import { CardCategory, CardKind } from "./enums";

export type CardCategory = (typeof CardCategory)[keyof typeof CardCategory];
export type CardKind = (typeof CardKind)[keyof typeof CardKind];

export interface ICard {
  points: number;
  category: CardCategory;
  kind: CardKind;
  name: string;
  getAdditionalPoints: (town: ITown) => number;
  slug: string;
}

export interface ITown {
  cards: ICard[];
  resources: {
    berry: number;
    resin: number;
    pebble: number;
    twig: number;
  };
  addCard: (slug: ICard["slug"]) => void;
  countByCategory: (category: CardCategory, exclude?: ICard["slug"]) => number;
  countByKind: (kind: CardKind, exclude?: ICard["slug"]) => number;
  hasCard: (slug: ICard["slug"]) => boolean;
  pointTokens: number;
  removeCard: (slug: ICard["slug"]) => void;
  score: number;
}
