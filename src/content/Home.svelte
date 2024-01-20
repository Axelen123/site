<script>
  import profile from '$assets/profile.svg';
</script>

<main class="swup swup-slide grid site-view mx-auto">
<!-- Note: I think the text breakpoints are fine, but the header needs some work. -->
  <header class="h-96 flex justify-start">
    <div class="my-auto flex flex-col gap-2">
      <h1 class="text-4xl md:text-6xl font-semibold">I am <span class="font-bold text-red-400">Axel.</span></h1>
      <h2 class="max-w-max text-xs md:text-sm text-red-200">@ax333l:chat.axelen.xyz</h2>
    </div>
  </header>

  <!-- This should probably break to a new line on smaller screens... -->
  <figure aria-hidden="true" class="my-auto flex justify-end">
    <img alt="Profile" class="w-[150px]" src={profile} />
  </figure>

  <!-- There is probably a better way to do the CSS here... -->
  <section id="about" class="col-span-2">
    <p class="text-base md:text-md md:text-left whitespace-pre-line">
      Swedish computer science student, technology nerd and open-source contributor who loves Linux, self-hosting, programming, and modding. I always go out of my way to avoid proprietary software and internet services whenever possible.
    </p>
  </section>
</main>
