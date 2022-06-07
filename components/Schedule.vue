<template>
<section
  id="schedule"
  class="py-32 space-y-16 bg-blue-dark"
>
  <div class="container flex flex-col items-center justify-center">
    <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
      {{ $t('schedules_of_season.title') }}
    </h2>

    <a
      class="flex items-center justify-center px-48 py-48 rounded-lg cursor-pointer bg-yellow-light"
      href="/public/static/Jeux-concours-2021-juillet-et-août-1.pdf"
      download
    >
      <img
        class="w-256 h-256 text-blue-dark"
        src="/public/static/calendar.svg"
        alt="calendar-icon"
      >
    </a>
  </div>
</section>
</template>
