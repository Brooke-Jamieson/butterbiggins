<template>
	<form
		action="/success"
		class="py-8"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
		method="POST"
		name="contact-form" x
	>
		<!-- Netlify required -->
		<input name="form-name" type="hidden" value="contact-form" />

		<!-- Honeypot -->
		<p class="hidden">
			<label>
				Don’t fill this out:
				<input name="bot-field" />
			</label>
		</p>

		<!-- Form Fields -->
		<div class="space-y-6">

			<!-- Request Type -->
			<div>
				<label class="block text-sm font-medium text-gray-700">
					Please select a topic
				</label>
				<select
					class="bg-white mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					name="request-type"
					required
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
					class="bg-white mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					name="name"
					required
					type="text"
				/>
			</div>

			<!-- Email -->
			<div>
				<label class="block text-sm font-medium text-gray-700">
					Email address
				</label>
				<input
					class="bg-white mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					name="email"
					required
					type="email"
				/>
			</div>

			<!-- Phone -->
			<div>
				<label class="block text-sm font-medium text-gray-700">
					Telephone number
				</label>
				<input
					class="bg-white mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					name="telephone"
					required
					type="tel"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">
					Description
				</label>
				<textarea
					class="bg-white mt-1 w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					name="description"
					placeholder="Please describe the issue or submission..."
					required
					rows="6"
				></textarea>
			</div>

		</div>

		<div class="mt-10 pt-6">
			<button
				class="w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				type="submit"
			>
				Submit
			</button>
		</div>
	</form>
</template>

<style scoped>
</style>