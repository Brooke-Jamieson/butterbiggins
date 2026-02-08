<template>
  <section class="min-h-screen bg-gray-50" id="tenant-issues-form">
    <form
        name="tenant-issues"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <!-- Netlify required -->
      <input type="hidden" name="form-name" value="tenant-issues" />

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
          Report an Issue
        </h1>
        <p class="mt-3 max-w-2xl text-gray-600">
          This site is run by tenants, for tenants.
          Use this form to report problems with your home or building.
        </p>
      </header>

      <!-- Form Fields -->
      <div class="space-y-6">
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

        <!-- Contact -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Contact email or phone
          </label>
          <input
              type="text"
              name="contact"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <p class="mt-1 text-sm text-gray-500">
            So we can follow up if needed
          </p>
        </div>

        <!-- Address -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Property address
          </label>
          <input
              type="text"
              name="address"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Issue Type -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            What is the issue about?
          </label>
          <select
              name="issue-type"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            <option>Repairs / Maintenance</option>
            <option>Heating / Hot Water</option>
            <option>Damp / Mould</option>
            <option>Safety Concern</option>
            <option>Anti-social behaviour</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Urgency -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            How urgent is this?
          </label>
          <select
              name="urgency"
              required
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select urgency</option>
            <option>Emergency (risk to safety)</option>
            <option>Urgent</option>
            <option>Not urgent</option>
          </select>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Describe the issue
          </label>
          <textarea
              name="description"
              rows="6"
              required
              class="mt-1 w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>

      <!-- Submit -->
      <div class="mt-10 border-t border-gray-200 pt-6">
        <button
            type="submit"
            class="w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit issue
        </button>

        <p class="mt-4 max-w-2xl text-sm text-gray-500">
          This form does not replace emergency services.
          If someone is in immediate danger, contact emergency services.
        </p>
      </div>
    </form>
  </section>
</template>
