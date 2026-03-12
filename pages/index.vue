<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "default",
});

const unlocked = ref(false);
const password = ref("");
const error = ref("");

const HASH =
    "69b7ad4338be10548141401de0d55d66a3b57b3aeeb283692e18c09b90188942";

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function checkPassword() {
  const hashed = await sha256(password.value);

  if (hashed === HASH) {
    unlocked.value = true;
    error.value = "";
  } else {
    error.value = "Incorrect password";
  }
}
</script>

<template>
  <Navbar></Navbar>
  <Container>
    <div class="relative w-screen"  :style="{ height: 'calc(100vh - 40px)' }">
    <!-- PASSWORD MODAL -->
    <div v-if="!unlocked" class="overlay">
      <div class="modal">
        <h2 class="text-xl mb-2">Enter Password</h2>
        <p>This can be found on a whiteboard in the common room.</p>
        <input
            type="password"
            v-model="password"
            placeholder="Password"
            @keyup.enter="checkPassword"
        />

        <button @click="checkPassword">Unlock</button>

        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>

    <!-- CALENDAR -->
    <Calendar v-if="unlocked"></Calendar>
    </div>
  </Container>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
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