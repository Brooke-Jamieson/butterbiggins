<template>
  <section class="relative min-h-[80vh] min-w-100vw pt-20">
    <!-- Koalendar Inline Embed -->
    <div id="inline-widget-meet-with-brooke-jamieson"></div>
  </section>
</template>

<script setup>
import { onMounted } from "vue"

onMounted(() => {
  // Setup global Koalendar function
  window.Koalendar =
      window.Koalendar ||
      function () {
        ;(window.Koalendar.props = window.Koalendar.props || []).push(arguments)
      }

  // Load widget script
  const script = document.createElement("script")
  script.src = "https://koalendar.com/assets/widget.js"
  script.async = true
  document.body.appendChild(script)

  // Initialize widget
  window.Koalendar("inline", {
    url: "https://koalendar.com/e/meet-with-brooke-jamieson",
    selector: "#inline-widget-meet-with-brooke-jamieson",
  })
})
</script>