<template>
  <CustomHeader />
  <Contact />
  <div class="flex justify-center py-10 bg-gray-200">
    <p class="font-medium text-center">feedbacker. All rights reserved</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Contact from './Contact.vue';
import CustomHeader from './CustomHeader.vue';

export default {
  components: { Contact, CustomHeader },
  setup () {
    const router = useRouter();    
      onMounted(() => {
        const token = window.localStorage.getItem('token');
        if(token) {
          router.push({ name: 'Feedback' });
        }
    });
  }
}
</script>