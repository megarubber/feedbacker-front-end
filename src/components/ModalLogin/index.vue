<template>
  <div class="flex justify-between">
      <h1 class="text-4xl font-black text-gray-800">
        Sign in
      </h1>
      <button
        @click="close"
        class="text-4xl text-gray-800 focus:outilne-none"
      >
        &times;
      </button>
  </div>
  <div class="mt-10">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="state.email.value"
          type="email"
          :class="{
            'border-brand-danger': !!state.email.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="user@email.com"
        >
        <span
          v-if="!!state.email.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.email.errorMessage }}
        </span>
        <span 
          v-else
          class="block font-medium text-brand-danger select-none"
        >
          &nbsp
        </span>
      </label>
      <label class="block mt-5">
        <span class="text-lg font-medium text-gray-800">Password</span>
        <input
          v-model="state.password.value"
          type="password"
          :class="{
            'border-brand-danger': !!state.password.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="More than 3 characters"
        >
        <span 
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.password.errorMessage }}
        </span>
        <span 
          v-else
          class="block font-medium text-brand-danger select-none"
        >
          &nbsp
        </span>
      </label>
      <button
        :disabled="state.isLoading"
				@click=""
        type="submit"
        :class="{
          'opacity-50': state.isLoading
        }"
				class="px-6 py-2 font-bold text-white bg-blue-800 rounded-full focus:outline-none"
			>
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useField } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { validateEmptyAndLength3, validateEmptyAndEmail } from '../../utils/validators.js';
import useModal from '../../hooks/useModal.js';
import services from '../../services';
export default {
  setup() {
    const modal = useModal();
		const router = useRouter();
		const toast = useToast();
		
    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail);

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3);

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      },
    });

    async function handleSubmit() {
			try {
				toast.clear();
				state.isLoading = true;
				const { data, errors } = await services.auth.login({
					email: state.email.value,
					password: state.password.value
				});

				if(!errors) {
					window.localStorage.setItem('token', data.token);
					router.push({ name: 'Feedback' });
					state.isLoading = false;
					modal.close();
					return;
				}

				switch(errors.status) {
					case 404:
						toast.error('E-mail was not founded');
					case 401:
						toast.error('Invalid e-mail or password');
					case 400:
						toast.error('Impossible to make login');
				}

				state.isLoading = false;
			} catch(error) {
				console.log(error);
				state.isLoading = false;
				state.hasErrors = !!error;
			}
    }

    return {
      state,
      close: modal.close,
			handleSubmit
    }
  }
}
</script>
