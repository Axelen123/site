<script lang="ts">
import type { Link } from '$/types';

const links: Link[] = [
  {
    url: "https://git.axelen.xyz/Ax333l/site/src/branch/master/LICENSE.md",
    name: `© ${new Date().getFullYear()}`,
  },
  {
    url: "https://github.com/Axelen123/site",
    name: "src code",
  },
  {
    url: "https://links.axelen.xyz",
    name: "contact",
  },
];
</script>

<footer class="w-screen h-14 bg-stone-700 flex justify-between">
  {#each links as link}
    <a class=" m-auto text-red-100" href={link.url}>{link.name}</a>
  {/each}
</footer>

<style lang="scss">
  @use "./edge.scss";
</style>
