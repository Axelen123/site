<script lang="ts">
import type { Link } from '$/types';

export let pathname: string;

function remove_suffixes(s: string) {
  const suffixes = ["index.html", ".html"];

  for (const suffix of suffixes) {
    if (!s.endsWith(suffix)) {
      continue;
    }

    s = s.substring(0, s.length - suffix.length);
  }
  return s;
}

// TODO: add unit tests for this.
function is_selected(a: string, b: string) {
  return remove_suffixes(a) === remove_suffixes(b);
}

const links: Link[] = [
  {
    url: "https://links.axelen.xyz",
    name: "links",
  },
  {
    url: "https://github.com/Axelen123",
    name: "my stuff",
  },
];
</script>

<nav class="swup w-screen h-20 top-0 flex justify-center items-center border-red-400 border-t-8 mb-8">
  <div class="site-view inline-block">
    <a href="/" class="text-red-400 site-larger-item-size float-left">
      axelen.xyz
    </a>
    <div id="nav-links" class="float-right space-x-12">
      {#each links as link}
	      <a class="site-item-size text-red-100" data-swup-preload class:site-selected={is_selected(pathname, link.url)} href={link.url}>{link.name}</a>
      {/each}
    <div>
  </div>
</nav>

<style lang="scss">
  @use "./edge.scss";

  .site-selected {
    @apply font-semibold underline underline-offset-4 decoration-red-500 decoration-4;
  }
</style>
