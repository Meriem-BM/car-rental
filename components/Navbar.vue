<template>
  <nav class="flex justify-between items-center bg-white text-white py-4 px-4">
    <div class="ml-14">
      <nuxt-link to="/">
        <img src="~/assets/svg/logo.svg" alt="DM" class="max-h-12" />
      </nuxt-link>
    </div>
    <div class="flex justify-between w-[80%]">
      <form class="w-[94%]">
        <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search"
            class="h-4 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search something here" required>
        </div>
      </form>
      <div class="flex justify-center items-center border rounded-full p-2">
        <nuxt-link to="/liked">
          <img src="~/assets/svg/heart.svg" alt="Liked" class="max-h-12" />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
