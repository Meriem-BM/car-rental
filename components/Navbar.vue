<template>
  <nav class="flex bg-white text-white py-6 px-4">
    <div>
      <nuxt-link to="/">
        <img src="~/assets/svg/logo.svg" alt="DM" class="max-h-12" />
      </nuxt-link>
    </div>
    <div class="flex-grow"></div>
    <div>
        <nuxt-link to="/liked">
            <img src="~/assets/svg/heart.svg" alt="Liked" class="max-h-12" />
        </nuxt-link>
    </div>
  </nav>
</template>
