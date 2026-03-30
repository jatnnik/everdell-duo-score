<script lang="ts">
  import { cardRegistry } from "../everdell/cardRegistry";
  import { CardCategory, CardKind } from "../everdell/enums";
  import { getTownContext } from "../everdell/town.svelte";
  import type { CardCategory as ICardCategory, ICard } from "../everdell/types";
  import CardsByCategory from "./CardsByCategory.svelte";

  const town = getTownContext();

  function getCardsByCategory(category: ICardCategory) {
    return Object.values(cardRegistry)
      .filter((c) => c.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  const travelerCards = getCardsByCategory(CardCategory.Traveler);
  const productionCards = getCardsByCategory(CardCategory.Production);
  const destinationCards = getCardsByCategory(CardCategory.Destination);
  const governanceCards = getCardsByCategory(CardCategory.Governance);
  const prosperityCards = getCardsByCategory(CardCategory.Prosperity);

  function handleCardClick(slug: ICard["slug"]) {
    town.addCard(slug);
  }

  function handleTownCardClick(slug: ICard["slug"]) {
    town.removeCard(slug);
  }
</script>

<section class="region flow">
  <h2 class="region__title">Karten</h2>

  <div class="town-cards cluster">
    {#if town.cards.length === 0}
      <em>Noch keine Karten</em>
    {/if}

    {#each town.cards as card (card.slug)}
      <button
        class="town-card repel"
        onclick={() => handleTownCardClick(card.slug)}
        data-nowrap
        data-category={card.category}
      >
        <span>
          {#if card.kind === CardKind.Critter}
            🐭
          {/if}
          {#if card.kind === CardKind.Building}
            🏠
          {/if}
          {card.name}
        </span>
        <span class="town-card__points">{card.points}</span>
      </button>
    {/each}
  </div>

  <CardsByCategory
    category={CardCategory.Traveler}
    title="Bewegung"
    cards={travelerCards}
    onCardClick={handleCardClick}
  />

  <CardsByCategory
    category={CardCategory.Production}
    title="Produktion"
    cards={productionCards}
    onCardClick={handleCardClick}
  />

  <CardsByCategory
    category={CardCategory.Destination}
    title="Ziel"
    cards={destinationCards}
    onCardClick={handleCardClick}
  />

  <CardsByCategory
    category={CardCategory.Governance}
    title="Verwaltung"
    cards={governanceCards}
    onCardClick={handleCardClick}
  />

  <CardsByCategory
    category={CardCategory.Prosperity}
    title="Wohlstand"
    cards={prosperityCards}
    onCardClick={handleCardClick}
  />
</section>

<style>
  .town-card {
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 500;
    padding: 0.5em 0.75em;
  }

  .town-card__points {
    background: gold;
    border-radius: 50%;
    display: grid;
    height: 1.5rem;
    place-items: center;
    width: 1.5rem;
  }
</style>
