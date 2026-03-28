<script lang="ts">
  import type { CardCategory, ICard } from "../everdell/types";

  interface Props {
    category: CardCategory;
    cards: ICard[];
    title: string;
    onCardClick: (slug: ICard["slug"]) => void;
  }

  const { cards, category, title, onCardClick }: Props = $props();
</script>

<details>
  <summary data-category={category}>{title}</summary>
  <div class="cards cluster">
    {#each cards as card (card.slug)}
      <button class="card" onclick={() => onCardClick(card.slug)}>
        {card.name}
      </button>
    {/each}
  </div>
</details>

<style>
  summary {
    cursor: pointer;
    font-weight: 500;
    padding: 0.5em 1em;
    user-select: none;
  }

  .cards {
    padding-block: 1em;
  }

  .card {
    background: #fff;
    border: 1px solid var(--color-fg);
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 500;
    padding: 0.5em 0.75em;
  }
</style>
