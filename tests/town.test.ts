import { expect, it } from "vitest";
import type { ICard } from "../src/lib/everdell/types";
import { Town } from "../src/lib/everdell/town.svelte";
import { cardRegistry } from "../src/lib/everdell/cardRegistry";

const mockCard: ICard = {
  points: 2,
  category: "destination",
  kind: "building",
  name: "test",
  getAdditionalPoints: () => {
    return 0;
  },
  slug: "test",
};

it("can add cards", () => {
  const town = new Town();
  // Needs a real card here, the method checks if the card slug exists in the card registry
  town.addCard(cardRegistry.teacher.slug);

  expect(town.hasCard(cardRegistry.teacher.slug)).toBe(true);
});

it("can remove cards", () => {
  const town = new Town({ cards: [mockCard] });

  town.removeCard(mockCard.slug);

  expect(town.hasCard(mockCard.slug)).toBe(false);
});

it("can check if a card is in town", () => {
  const town = new Town({ cards: [mockCard] });

  expect(town.hasCard(mockCard.slug)).toBe(true);
});

it("can count cards by category", () => {
  const town = new Town({ cards: [mockCard] });

  expect(town.countByCategory(mockCard.category)).toBe(1);
});

it("can exclude card when counting by category", () => {
  const town = new Town({ cards: [mockCard] });

  expect(town.countByCategory(mockCard.category, mockCard.slug)).toBe(0);
});

it("can count cards by kind", () => {
  const town = new Town({ cards: [mockCard] });

  expect(town.countByKind(mockCard.kind)).toBe(1);
});

it("can exclude card when counting by kind", () => {
  const town = new Town({ cards: [mockCard] });

  expect(town.countByKind(mockCard.kind, mockCard.slug)).toBe(0);
});

it("can calculate score", () => {
  const town = new Town({ cards: [mockCard], __pointTokens: 2 });

  expect(town.score).toBe(4);
});
