<template>login</template>

<script>
import { defineComponent } from 'vue';
import Auth from '@/server/FirebaseAuth'
export default defineComponent({
  setup () {
    // Auth.signup();
    Auth.signIn();
  }
});
</script>

<style></style>
