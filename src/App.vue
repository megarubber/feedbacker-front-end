<template>
  <ModalFactory />
  <RouterView />
</template>

<script>
import { watch } from 'vue';
import ModalFactory from './components/ModalFactory/index.vue';
import { RouterView, useRouter, useRoute } from 'vue-router';
import services from './services';

export default {
  components: {
    ModalFactory,
		RouterView
  },
	setup() {
		const router = useRouter();
		const route = useRoute();

		watch(() => route.path, async () => {
			if(route.meta.hasAuth) {
				const token = window.localStorage.getItem('token');
				if(!token) {
					router.push({ name: 'Home' });
					return;
				}

				const { data } = await services.users.getMe();
				console.log('data', data);
			}
		});
	}
}
</script>
