<template>
  <div class="ads-card-right">
    <div></div>
    <p class="text-white text-4xl ml-6 mt-10 w-72">
      Easy way to rent a car at a low price
      <span class="block mt-6 text-base font-light">
        Providing cheap car rental services and safe and comfortable
        facilities.</span
      >
    </p>
    <button
      type="button"
      class="absolute bg-[#54A6FF] text-white px-4 py-2 rounded-lg mt-6 text-base font-medium hover:bg-[#3B8BFF] ml-6"
      @click="() => {}"
    >
      Rental Car
    </button>
    <img
      src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1696204800&Signature=D4-42vw6zUwTdQTjaCSQ0OJrx~QLbXx2kMEGD0URXBOyujXj6KD8gI9zvAa~CMrHVsZjUDm7~-jF6BTOYLUO9DanELqg8l8u048kHImThh2V42KS9qRL--OJMibTkCoYQIb7tmZ7Udmka3uCVXwCrV6Ty1IgYxqbGu9vM32hlXX9dWsrSrQwM69G78IrQhD4qGzKcoq~4G1lCf~N0bcD3EYbqhaio8oTyW1FX5naf5yEk1nmCLklaqx0yG3iqBkslVNCqcarXxo03-Y12cypsV67nmLobB2fRQFIJETt0d-zECeybSelS45lWNiSTNw~OQ~XuiNRUoh8zLBlJvptKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="Ads"
      class="absolute lg:top-[49%] top-[59%] max-h-full lg:h-[64%] h-[50%] space-x-reverse xl:right-[16%] lg:right-[12%] md:right-[8%] sm:right-[16%] right-[2%]"
    />
  </div>
</template>

<style scoped lang="scss">
.ads-card-right {
  position: relative;
  width: 45%;
  height: 360px;
  background-color: #3563e9;
  border-radius: 1rem;
  overflow: hidden;
  flex-shrink: 0;

  & > div {
    position: absolute;
    background-color: antiquewhite;
    width: 100%;
    height: 100%;
    -webkit-mask-image: url("~/assets/svg/ads-bg-right.svg");
    mask-image: url("~/assets/svg/ads-bg-right.svg");
  }

  & > img {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}

@media (max-width: 768px) {
  .ads-card-right {
    width: 90%;
    height: 300px;
    margin-top: 1rem;
    margin: 0 auto;
  }
}
</style>
