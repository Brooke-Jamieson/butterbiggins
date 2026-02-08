<template>
  <section class="relative min-h-[80vh] flex items-center justify-center">
    <!-- Background image (optional, subtle) -->
    <img
        src="../assets/hero.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-50"
    />

    <!-- Overlay for readability -->
    <div class="absolute inset-0"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 sm:px-12 ">
      <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
        Your Home, Your Voice
      </h1>
      <p class="mt-4 max-w-xl text-gray-700 mx-auto text-lg md:text-xl">
        A space run by tenants, for tenants. Report issues, share concerns, and help keep our community safe and well-maintained.
      </p>

      <!-- CTA button linking to form -->
      <a
          href="#tenant-issues-form"
          class="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Report an Issue
      </a>
    </div>
  </section>
</template>
