<template>
  <NuxtLayout name="404">
    <div
      class="absolute h-screen w-full text-gray-darker flex flex-col justify-center items-center"
    >
      <h1
        class="text-6xl font-bold text-gray-900 border-r-2 border-gray-900 pr-4"
      >
        404
      </h1>
      <p class="text-gray-700 border-b border-gray-700">Page not found</p>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  name: "404",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
