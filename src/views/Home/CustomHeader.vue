<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img class="w-full" src="../../assets/images/logo.png" alt="logo">
        </div>
        <div class="flex">
          <button 
						@click="() => emit('create-account')"
						class="px-6 py-2 font-bold text-white rounded-full focus:outline-none"
					>
            Create account
          </button>
          <button 
            @click="() => emit('login')"
            class="px-6 py-2 font-bold text-white bg-blue-800 rounded-full focus:outline-none"
          >
            Sign in
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Create a new feedback. <br>
          And make your clients more <br class="hidden lg:inline-block">
          happier!
        </h1>
        <p class="text-lg mt-5 font-medium text-white">
          Join now at feedbacker and get new ideas, claims and feedbacks with <br class="hidden lg:inline-block">only one widget on screen.
        </p>
      </div>
      <div>
        <button 
					@click="() => emit('create-account')"
					class="px-6 py-2 mt-10 font-bold text-white bg-blue-800 rounded-full focus:outline-none"
				>
          Create a new account for free
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup(_, { emit }) {
    return { emit }
  }
}
</script>

<style lang="postcss" scoped>
.header {
  @apply bg-blue-500 w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(../../assets/images/blue-balloons.png);
    background-size: 628px;
    background-repeat: no-repeat;
    background-position: right bottom;
  }
}
</style>
