<script lang="ts">
  import { getTownContext } from "../everdell/town.svelte";

  const town = getTownContext();
</script>

<section class="region flow">
  <h2 class="region__title">Ressourcen</h2>

  <div class="resource-grid">
    <div>
      <label for="point-tokens">🪙 Siegpunkte</label>
      <input
        type="number"
        id="point-tokens"
        min="0"
        bind:value={town.pointTokens}
      />
    </div>

    <div>
      <label for="twigs">🪵 Zweige</label>
      <input
        type="number"
        id="twigs"
        min="0"
        bind:value={town.resources.twig}
      />
    </div>

    <div>
      <label for="berries">🫐 Beeren</label>
      <input
        type="number"
        id="berries"
        min="0"
        bind:value={town.resources.berry}
      />
    </div>

    <div>
      <label for="pebble">🪨 Steine</label>
      <input
        type="number"
        id="pebble"
        min="0"
        bind:value={town.resources.pebble}
      />
    </div>

    <div>
      <label for="resin">🟠 Harz</label>
      <input
        type="number"
        id="resin"
        min="0"
        bind:value={town.resources.resin}
      />
    </div>
  </div>
</section>

<style>
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5em;
  }

  input {
    width: 100%;
  }
</style>
