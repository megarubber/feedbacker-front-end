<template>
  <CustomHeader 
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
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
import useModal from '../../hooks/useModal.js';

export default {
  components: { Contact, CustomHeader },
  setup () {
    const router = useRouter();    
    const modal = useModal();
    onMounted(() => {
      const token = window.localStorage.getItem('token');
      if(token) {
        router.push({ name: 'Feedback' });
      }
    });

    function handleLogin() {
      modal.open({
        component: 'ModalLogin'
      });
    }

    function handleAccountCreate() {

    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>