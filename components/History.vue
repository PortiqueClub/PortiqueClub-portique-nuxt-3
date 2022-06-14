<template>
<section
  id="history"
  class="py-32 space-y-16 bg-blue-dark"
>
  <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
    {{ $t('club.history_title') }}
  </h2>

  <div class="grid grid-cols-1 md:gap-32 md:container md:grid-cols-3">
    <div class="hidden md:block">
      <img
        src="/static/historique-photo.png"
        :alt="$t('club.history_title')"
      >
    </div>
    <div class="col-span-2 px-20 py-24">
      <p class="text-yellow-light">
        {{ $t('club.history_content') }}
      </p>
    </div>
  </div>
</section>
</template>
