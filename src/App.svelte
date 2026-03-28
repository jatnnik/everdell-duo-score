<script lang="ts">
  import { Town, setTownContext } from "./lib/everdell/town.svelte";
  import ScoreDisplay from "./lib/components/ScoreDisplay.svelte";
  import Resources from "./lib/components/Resources.svelte";
  import Cards from "./lib/components/Cards.svelte";

  setTownContext(new Town());
</script>

<main class="wrapper flow">
  <ScoreDisplay />
  <Resources />
  <Cards />
</main>
