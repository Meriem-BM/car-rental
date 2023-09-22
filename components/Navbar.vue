<template>
  <nav class="bg-white py-6 px-4 mb-10">
    <div class="flex justify-between items-center">
      <div class="sm:ml-14 ml-0">
        <nuxt-link to="/">
          <img src="~/assets/svg/logo.svg" alt="DM" class="max-h-12" />
        </nuxt-link>
      </div>
      <div class="flex sm:justify-between justify-end items-center md:w-[80%] w-[70%]">
        <form class="lg:w-[94%] md:w-[90%] w-[88%] sm:block hidden">
          <label
            for="default-search"
            class="text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
            >
              <img
                src="~/assets/svg/search-icon.svg"
                alt="Search"
                class="max-h-12"
              />
            </div>
            <input
              type="search"
              id="default-search"
              class="h-4 block w-full p-4 pl-14 text-sm text-gray-900 border border-primary-gray rounded-full bg-transparent focus:border-gray-400 focus:outline-none"
              placeholder="Search something here"
              required
            />
          </div>
        </form>
        <div
          class="flex justify-center items-center border rounded-full border-primary-gray p-2"
        >
          <nuxt-link to="/">
            <img src="~/assets/svg/heart.svg" alt="Liked" class="max-h-12" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <form class="sm:hidden block mt-6">
      <label
        for="default-search"
        class="text-sm font-medium text-gray-darker sr-only"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
        >
          <img
            src="~/assets/svg/search-icon.svg"
            alt="Search"
            class="max-h-12"
          />
        </div>
        <input
          type="search"
          id="default-search"
          class="h-4 block w-full p-4 pl-12 text-sm text-gray-darker border border-primary-gray rounded-lg bg-transparent focus:border-gray-400 focus:outline-none placeholder-gray-400"
          placeholder="Search something here"
          required
        />
      </div>
    </form>
  </nav>
</template>

<style scoped>
::placeholder {
  color: var(--text-dark-gray);
  opacity: 1; /* Firefox */
}
</style>
```
