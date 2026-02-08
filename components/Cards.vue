<script setup>
const team = [
  {
    name: "Jane Doe",
    role: "Tenant Support Lead",
    contact: "jane@example.com",
    image: "/team/jane.jpg",
  },
  {
    name: "John Smith",
    role: "Community Liaison",
    contact: "john@example.com",
    image: "/team/john.jpg",
  },
  {
    name: "Alex Brown",
    role: "Maintenance Coordinator",
    contact: "alex@example.com",
    image: "/team/alex.jpg",
  },
  {
    name: "Jane Doe",
    role: "Tenant Support Lead",
    contact: "jane@example.com",
    image: "/team/jane.jpg",
  },
  {
    name: "John Smith",
    role: "Community Liaison",
    contact: "john@example.com",
    image: "/team/john.jpg",
  },
  {
    name: "Alex Brown",
    role: "Maintenance Coordinator",
    contact: "alex@example.com",
    image: "/team/alex.jpg",
  },
]
</script>

<template>
  <section class="bg-gray-50 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
          Meet the Team
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          The friendly faces who keep this community running smoothly.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
            v-for="person in team"
            :key="person.contact"
            class="flex flex-col items-center rounded-lg bg-white px-6 py-8 text-center shadow-sm transition hover:shadow-md"
        >
          <!-- Small Face Image -->
          <img
              :src="person.image"
              :alt="person.name"
              class="h-20 w-20 rounded-full object-cover"
          />

          <!-- Name -->
          <h3 class="mt-4 text-xl font-semibold text-gray-900">
            {{ person.name }}
          </h3>

          <!-- Role -->
          <p class="mt-1 text-gray-600">
            {{ person.role }}
          </p>

          <!-- Contact (optional, friendly style) -->
          <a
              :href="`mailto:${person.contact}`"
              class="mt-2 text-sm text-blue-600 hover:underline"
          >
            {{ person.contact }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
