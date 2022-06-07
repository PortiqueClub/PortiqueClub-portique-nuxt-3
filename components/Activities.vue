<template>
<section
  id="activities"
  class="py-32 pt-64 space-y-16 bg-blue-dark"
>
  <h2 class="mt-20 mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
    {{ $t('menu.activity') }}
  </h2>

  <div class="grid grid-cols-2 gap-16 md:grid-cols-none md:grid-flow-col md:grid-rows-4 md:container">
    <div class="col-span-3 row-span-4 space-y-16">
      <!-- activities content -->
      <div class="space-y-16 md:col-span-3">
        <div class="grid grid-cols-2 col-span-4 gap-16 px-32 md:grid-cols-3">
          <div class="flex flex-col justify-center space-y-8 text-center">
            <h4 class="text-xl font-bold text-yellow-light">
              {{ $t('booking.without') }}
            </h4>
            <div class="px-10 py-8 text-center border-4 rounded-full border-yellow-light">
              <h5 class="font-semibold text-yellow-light">
                {{ $t('club.mini.title') }}
              </h5>
              <p class="font-semibold text-yellow-light">
                {{ $t('club.mini.age_range') }}
              </p>
            </div>
          </div>
          <div class="hidden md:block" />
          <div class="flex flex-col justify-center space-y-8 text-center">
            <h4 class="text-xl font-bold text-yellow-light">
              {{ $t('booking.without') }}
            </h4>
            <div class="px-10 py-8 text-center border-4 rounded-full border-yellow-light bg-yellow-light">
              <h5 class="font-semibold text-blue-dark">
                {{ $t('club.big_club.title') }}
              </h5>
              <p class="font-semibold text-blue-dark">
                {{ $t('club.big_club.age_range') }}
              </p>
            </div>
          </div>
        </div>

        <div class="py-4 bg-yellow-light rounded-xl">
          <div class="flex flex-col px-12 space-y-12">
            <div class="flex flex-col items-center justify-center space-y-12">
              <h6 class="px-6 py-4 rounded-full text-yellow-light bg-blue-dark">
                {{ t('hours.morning') }}
              </h6>
              <p class="px-8 text-blue-dark">
                {{ t('club.morning') }}
              </p>
            </div>
            <div class="hidden grid-cols-2 gap-32 md:grid">
              <img
                class="w-full"
                src="/public/static/trampoline.svg"
                alt="trampoline"
              >
              <img
                class="w-full"
                src="/public/static/balancoire.svg"
                alt="balançoires"
              >
              <!-- TODO add translation for assets -->
            </div>
          </div>
        </div>
      </div>

      <!-- lunch break -->
      <div class="py-12 bg-yellow-light rounded-xl">
        <div class="flex flex-col px-12">
          <div class="flex flex-col items-center justify-center">
            <h6 class="px-6 py-4 rounded-full text-yellow-light bg-blue-dark">
              {{ t('hours.lunch') }}
            </h6>
            <p class="px-8 text-blue-dark">
              {{ t('club.lunch') }}
            </p>
          </div>
        </div>
      </div>

      <!-- mini afternoon -->
      <div class="grid grid-cols-2 gap-4 px-16 py-8 md:gap-32">
        <div class="flex flex-col items-center px-12 py-8 space-y-12 border-4 rounded-lg border-yellow-light">
          <h6 class="px-6 py-4 text-center rounded-full text-blue-dark bg-yellow-light">
            {{ t('hours.afternoon') }}
          </h6>
          <p class="px-8 text-yellow-light">
            {{ t('club.mini.afternoon') }}
          </p>
        </div>
        <!-- big afternoon -->
        <div class="flex flex-col items-center px-12 py-8 space-y-12 border-4 rounded-lg border-yellow-light bg-yellow-light">
          <h6 class="px-6 py-4 text-center rounded-full text-yellow-light bg-blue-dark">
            {{ t('hours.afternoon') }}
          </h6>
          <p class="px-12 text-blue-dark">
            {{ t('club.big_club.afternoon') }}
          </p>
        </div>
      </div>
    </div>

    <div class="col-span-3 space-y-16 sm:col-span-2 md:row-span-4">
      <div class="flex flex-col items-center justify-center space-y-8 text-center">
        <h4 class="text-xl font-bold text-blue-light">
          {{ t('booking.with') }}
        </h4>
        <div class="px-20 py-8 text-center border-4 rounded-full border-blue-light bg-blue-light">
          <h5 class="font-semibold text-blue-dark">
            {{ t('pool.swim_lessons') }}
          </h5>
          <p class="font-semibold text-blue-dark">
            {{ t('pool.age_range') }}
          </p>
        </div>
      </div>

      <!-- pool content -->
      <div class="space-y-12 py-18 bg-blue-light rounded-xl">
        <div class="flex flex-col px-12 space-y-24">
          <div class="flex flex-col items-center justify-center space-y-24">
            <h6 class="px-6 py-4 rounded-full text-blue-light bg-blue-dark">
              {{ t('hours.day') }}
            </h6>
            <h6 class="px-6 py-4 rounded-full text-blue-light bg-blue-dark">
              {{ t('pool.duration') }}
            </h6>
            <ul class="px-8 space-y-6 list-disc text-blue-dark">
              {{ t('pool.content.list.title') }}
              <li class="px-8">
                {{ t('pool.content.list.for_small_kids') }}
              </li>
              <li class="px-8">
                {{ t('pool.content.list.for_big_kids') }}
              </li>
            </ul>
            <p class="px-8 text-blue-dark">
              {{ t('pool.content.list.infos_message') }}
            </p>
          </div>
          <div class="hidden md:block">
            <img
              class="w-full"
              src="/public/static/nageur.svg"
              alt="nageur"
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end of day -->
  <div class="md:container">
    <div class="flex flex-col items-center justify-center px-16 py-12 space-y-16 text-center rounded-lg bg-yellow-light">
      <h6 class="px-6 py-4 rounded-full text-yellow-light bg-blue-dark lg:text-2xl">
        {{ t('club.on_closing_title') }}
      </h6>
      <p class="px-32 text-blue-dark">
        {{ t('club.on_closing') }}
      </p>
      <div class="hidden md:block">
        <img
          class="w-full h-256"
          src="/public/static/dance.svg"
          alt="dance"
        >
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
