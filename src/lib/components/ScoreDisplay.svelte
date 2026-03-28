<script lang="ts">
  import { getTownContext } from "../everdell/town.svelte";

  const town = getTownContext();
</script>

<div class="score-display">
  Punktzahl: {town.score}
</div>

<style>
  .score-display {
    background-color: #133d1b;
    color: var(--color-bg);
    font-weight: 600;
    padding: 1em;
  }
</style>
