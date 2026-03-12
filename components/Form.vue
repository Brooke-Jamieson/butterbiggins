<template>
  <section class="min-h-screen bg-gray-50" id="contact-form">
    <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <!-- Netlify required -->
      <input type="hidden" name="form-name" value="contact-form" />

      <!-- Honeypot -->
      <p class="hidden">
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <!-- Header -->
      <header class="mb-10">
        <h1 class="text-3xl font-semibold text-gray-900">
          Contact Us
        </h1>
        <p class="mt-3 max-w-2xl text-gray-600">
          Use this form to report a booking issue, submit a newsletter entry,
          or contact us for any other reason.
        </p>
      </header>

      <!-- Form Fields -->
      <div class="space-y-6">

        <!-- Request Type -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            What is this about?
          </label>
          <select
              name="request-type"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            <option>Report a booking error</option>
            <option>Newsletter entry submission</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Your name
          </label>
          <input
              type="text"
              name="name"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
              type="email"
              name="email"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Telephone number
          </label>
          <input
              type="tel"
              name="telephone"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
              name="description"
              rows="6"
              required
              class="mt-1 w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Please describe the issue or submission..."
          ></textarea>
        </div>

      </div>

      <!-- Submit -->
      <div class="mt-10 border-t border-gray-200 pt-6">
        <button
            type="submit"
            class="w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</template>