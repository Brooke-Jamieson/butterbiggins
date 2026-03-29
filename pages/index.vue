<script setup>
import { ref } from 'vue';

definePageMeta({
	layout: 'default',
});

const unlocked = ref(false);
const password = ref('');
const error = ref('');

const HASH =
	'2b02a156726a3bb6b949eec1d6bcaaaf7a5086f03b376f3488dbf2c69482966f';

async function sha256(text) {
	const data = new TextEncoder().encode(text);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function checkPassword() {
	const hashed = await sha256(password.value);

	if (hashed === HASH) {
		unlocked.value = true;
		error.value = '';
	} else {
		error.value = 'Incorrect password';
	}
}
</script>

<template>
	<Navbar></Navbar>
	<Container>
		<div class="relative w-screen h-screen">
			<!-- PASSWORD MODAL -->
			<div v-if="!unlocked" class="overlay">
				<div class="modal">
					<h2 class="text-xl mb-2">Enter Password</h2>
					<p class="text-sm text-gray-500 mb-2">This can be found on a whiteboard in the common room.</p>
					<input
						v-model="password"
						class="border-2 border-gray-200 rounded mb-2"
						placeholder="Password"
						type="password"
						@keyup.enter="checkPassword"
					/>

					<button
						class="w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						@click="checkPassword"
					>
						Unlock Booking System
					</button>
					<p v-if="error" class="error">{{ error }}</p>
				</div>
			</div>
			<Calendar v-if="unlocked"></Calendar>
		</div>
	</Container>
</template>

<style scoped>
.overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.modal {
	background: white;
	padding: 30px;
	border-radius: 10px;
	width: 300px;
	text-align: center;
}

input {
	width: 100%;
	padding: 8px;
	margin-top: 10px;
}

button {
	margin-top: 10px;
	padding: 8px 16px;
}

.error {
	color: red;
	margin-top: 10px;
}
</style>