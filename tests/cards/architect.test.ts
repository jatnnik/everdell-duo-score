import { expect, it } from "vitest";
import { Town } from "../../src/lib/everdell/town.svelte";
import { cardRegistry } from "../../src/lib/everdell/cardRegistry";

it("scores correct", () => {
  const town = new Town({
    cards: [cardRegistry.architect],
    resources: {
      berry: 1,
      twig: 1,
      pebble: 0,
      resin: 3,
    },
  });

  expect(cardRegistry.architect.getAdditionalPoints(town)).toBe(6);
});
