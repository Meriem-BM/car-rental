<template>
  <footer class="bg-white">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <nuxt-link to="/" class="flex items-center text-gray-900">
            <img
              src="~/assets/svg/logo.svg"
              class="h-8 mr-3"
              alt="FlowBite Logo"
            />
          </nuxt-link>
          <p class="mt-6 text-sm text-gray-light w-[60%]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-darker">About</h2>
            <ul class="text-gray-light font-normal">
              <li class="mb-4">
                <a href="#" class="hover:underline">How it works</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Featured</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Partnership</a>
              </li>
              <li>
                <a href="#" class="hover:underline"> Bussiness Relation </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-darker">
              Community
            </h2>
            <ul class="text-gray-light font-medium">
              <li class="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  class="hover:underline"
                  >Events</a
                >
              </li>
              <li class="mb-4">
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"
                  >Blog</a
                >
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Podcast</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Invite a friend</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-darker">Socials</h2>
            <ul class="text-gray-light font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Discord</a>
              </li>

              <li class="mb-4">
                <a href="#" class="hover:underline">Instagram</a>
              </li>

              <li class="mb-4">
                <a href="#" class="hover:underline">Twitter</a>
              </li>

              <li>
                <a href="#" class="hover:underline">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-light sm:mx-auto dark:border-gray-300 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-darker sm:text-center"
          >© 2022
          <a href="https://flowbite.com/" class="hover:underline">DM</a>. All
          rights reserved
        </span>
        <div class="flex mt-4 space-x-8 sm:justify-center sm:mt-0">
          <p class="text-sm text-gray-darker">Privacy & Policy</p>
          <p class="text-sm text-gray-darker">Terms & Conditions</p>
        </div>
      </div>
    </div>
  </footer>
</template>
