<template>
	<div class="flex justify-center w-full h-28 bg-brand-main">
		<HeaderLogged />
	</div>
	<div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
		<h1 class="text-4xl font-black text-center text-gray-800">
			Credentials
		</h1>
		<p class="text-lg text-center text-gray-800 font-regular">
			Instalation guide & generation of your credentials
		</p>
	</div>
</template>

<script>
import HeaderLogged from '../../components/HeaderLogged';
export default {
	components: { HeaderLogged }
}
</script>
