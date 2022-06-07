<template>
<section
  id="schedules-and-prices"
  class="py-32 space-y-16 bg-blue-dark"
>
  <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
    {{ $t('pricings.title') }}
  </h2>

  <div class="gap-32 space-y-12 md:grid md:container md:grid-cols-3 md:space-y-0">
    <div class="space-y-12 md:col-span-2">
      <h4 class="text-2xl font-bold text-center text-yellow-light">
        {{ $t('booking.without') }}
      </h4>

      <div class="px-32 py-24 space-y-12 bg-yellow-light rounded-xl">
        <p class="text-blue-dark">
          {{ $t('pricings.description') }}
        </p>
        <div class="grid grid-cols-2 gap-32">
          <div class="flex flex-col items-center justify-center space-y-8">
            <h6 class="px-6 py-4 rounded-full text-yellow-light bg-blue-dark">
              {{ $t('hours.morning') }}
            </h6>
            <p class="px-8 py-8 text-center rounded-full bg-blue-dark text-yellow-light">
              {{ $t('pricings.morning') }}
            </p>
          </div>
          <div class="flex flex-col items-center justify-center space-y-8">
            <h6 class="px-6 py-4 rounded-full text-yellow-light bg-blue-dark">
              {{ $t('hours.afternoon') }}
            </h6>
            <p class="px-8 py-8 text-center rounded-full bg-blue-dark text-yellow-light">
              {{ $t('pricings.afternoon') }}
            </p>
          </div>
          <div class="flex flex-col items-center justify-center col-span-2 space-y-8">
            <div class="w-full px-6 py-4 rounded-full text-yellow-light bg-blue-dark">
              <h6 class="text-center">
                {{ $t('hours.day') }}
              </h6>
            </div>
            <p class="px-8 py-8 text-center rounded-full bg-blue-dark text-yellow-light">
              {{ $t('pricings.day') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col h-full space-y-8 text-center">
      <h4 class="text-2xl font-bold text-blue-light">
        {{ $t('booking.with') }}
      </h4>
      <div class="h-full px-32 py-24 space-y-24 rounded-xl border-blue-light bg-blue-light">
        <div class="flex flex-col items-center justify-center space-y-24">
          <div class="w-full px-6 py-8 rounded-full bg-blue-dark text-blue-light">
            <h5 class="font-semibold text-center ">
              {{ $t('pool.duration') }}
            </h5>
          </div>
          <p class="font-semibold text-left text-blue-dark">
            {{ $t('pool.booking.to_book') }} <a
              class="underline cursor-pointer"
              href="tel:0613792562"
            >{{ $t('base.contact') }}</a> {{ $t('pool.booking.mns_contact') }}
          </p>
          <div class="w-full px-6 py-8 rounded-full bg-blue-dark text-blue-light">
            <h6 class="font-semibold text-center ">
              {{ $t('hours.day') }}
            </h6>
          </div>
          <p class="px-8 py-8 text-center rounded-full bg-blue-dark text-blue-light">
            {{ $t('pricings.lessons') }}
          </p>
        </div>
      </div>
    </div>

    <div class="col-span-3 px-32 py-12 space-y-24 rounded-xl bg-yellow-light">
      <div class="w-full px-6 py-4 rounded-full text-yellow-light bg-blue-dark">
        <h6 class="text-center">
          {{ $t('payment.title') }}
        </h6>
      </div>
      <div class="flex justify-around">
        <div class="flex flex-col space-y-32">
          <h6 class="px-6 py-4 text-center rounded-full text-yellow-light bg-blue-dark">
            {{ $t('payment.cash') }}
          </h6>
          <img
            class="w-full h-106"
            src="/public/static/euro.svg"
            alt="Espèce"
          >
        </div>
        <div class="flex flex-col space-y-32">
          <h6 class="px-6 py-4 text-center rounded-full text-yellow-light bg-blue-dark">
            {{ $t('payment.ch') }}
          </h6>
          <img
            class="w-full h-80"
            src="/public/static/cheque.png"
            alt="Espèce"
          >
        </div>
        <div class="flex flex-col space-y-32">
          <h6 class="px-6 py-4 text-center rounded-full text-yellow-light bg-blue-dark">
            {{ $t('payment.cv') }}
          </h6>
          <img
            class="w-full h-106"
            src="/public/static/cheque-vacance.svg"
            alt="Chèque-vacances"
          >
        </div>
      </div>
    </div>
  </div>
</section>
</template>
