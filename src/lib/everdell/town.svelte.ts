import { createContext } from "svelte";
import type { CardCategory, CardKind, ICard, ITown } from "./types";
import { cardRegistry } from "./cardRegistry";

type ConstructorArgs = {
  cards?: ITown["cards"];
  resources?: Partial<ITown["resources"]>;
  __pointTokens?: ITown["pointTokens"]; // Just for testing
};

export class Town implements ITown {
  cards: ICard[] = $state([]);
  pointTokens: number = $state(0);
  resources: ITown["resources"] = $state({
    berry: 0,
    pebble: 0,
    resin: 0,
    twig: 0,
  });

  constructor(args?: ConstructorArgs) {
    if (args?.cards) {
      this.cards = args.cards;
    }

    if (args?.resources) {
      this.resources = Object.assign(this.resources, args.resources);
    }

    if (args?.__pointTokens) {
      this.pointTokens = args.__pointTokens;
    }
  }

  addCard(slug: ICard["slug"]) {
    if (this.hasCard(slug)) return;

    const card = cardRegistry[slug as keyof typeof cardRegistry];
    if (card) {
      this.cards.push(card as ICard);
    }
  }

  hasCard(slug: ICard["slug"]): boolean {
    return !!this.cards.find((c) => c.slug === slug);
  }

  countByCategory(category: CardCategory, exclude?: ICard["slug"]): number {
    const cards = exclude ? this.cards.filter((c) => c.slug !== exclude) : this.cards;

    return cards.filter((c) => c.category === category).length;
  }

  countByKind(kind: CardKind, exclude?: ICard["slug"]): number {
    const cards = exclude ? this.cards.filter((c) => c.slug !== exclude) : this.cards;

    return cards.filter((c) => c.kind === kind).length;
  }

  removeCard(slug: ICard["slug"]) {
    if (!this.hasCard(slug)) return;

    this.cards = this.cards.filter((c) => c.slug !== slug);
  }

  score = $derived.by(() => {
    let score = this.pointTokens;

    // Add base and bonus points of each card
    for (let card of this.cards) {
      score += card.points;
      score += card.getAdditionalPoints(this);
    }

    // Events

    return score;
  });
}

export const [getTownContext, setTownContext] = createContext<Town>();
