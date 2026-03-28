import { expect, it } from "vitest";
import { Town } from "../../src/lib/everdell/town.svelte";
import { cardRegistry } from "../../src/lib/everdell/cardRegistry";
import type { ICard } from "../../src/lib/everdell/types";

const mockProsperityCard: ICard = {
  points: 0,
  category: "prosperity",
  kind: "building",
  name: "test",
  getAdditionalPoints: () => {
    return 0;
  },
  slug: "test",
};

const mockProsperityCard2: ICard = {
  points: 0,
  category: "prosperity",
  kind: "building",
  name: "test-2",
  getAdditionalPoints: () => {
    return 0;
  },
  slug: "test-2",
};

it("scores correct", () => {
  const town = new Town({ cards: [cardRegistry.palace, mockProsperityCard, mockProsperityCard2] });

  expect(cardRegistry.palace.getAdditionalPoints(town)).toBe(2);
});
