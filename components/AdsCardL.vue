<template>
  <div class="ads-card-left">
    <div></div>
    <p class="text-white md:text-4xl text-2xl mx-6 mt-10 md:w-72 w-90">
      The Best Platform for Car Rental
      <span
        class="block md:mt-6 mt-2 md:text-base text-xs font-light md:w-72 w-60"
      >
        Ease of doing a car rental safely and reliably. Of course at a low
        price.</span
      >
    </p>
    <button
      type="button"
      class="absolute bg-[#3563E9] text-white px-4 py-2 rounded-lg mt-6 text-base font-medium hover:bg-[#3B8BFF] ml-6"
      @click="() => {}"
    >
      Rental Car
    </button>
    <img
      src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1696204800&Signature=XdyXCbhM0~6MAXLXkDwGccYbXAPJXgwaEL2FGlctgoeqSIVD~MsEghsJT5EVC4dyqfXekTgoSzbxRs53G8qladaJu2s5MZzsTv-fhlj2~PydIwuN~r1dLXzzUTTvKjf0xR-ZMB9s5b4EFE8SCl9myH8F1MVXpzIgr-vJBm6jgsCClU6~tJ9pufQk61u~kBzMPE9~qViH6rdySQw8E9en1OjKheJHYx-Rzp2puWjHJlFhZy9jHN8vmyEvNJb3Tb0jPkRkO3yKU8j82f9Ll-HJJt6xIAfa-~fKS~Ko0P2T8i898VRA~-S377hF3bAC~zldxgpt4Pv687mbS59QVQ8ktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="Ads"
      class="absolute lg:top-[55%] top-[65%] max-h-full lg:h-[50%] h-[38%] space-x-reverse xl:right-[16%] lg:right-[10%] md:right-[6%] sm:right-[16%] right-[2%]"
    />
  </div>
</template>

<style scoped lang="scss">
.ads-card-left {
  position: relative;
  width: 45%;
  height: 360px;
  background-color: #54a6ff;
  border-radius: 1rem;
  overflow: hidden;
  flex-shrink: 0;

  & > div {
    position: absolute;
    background-color: antiquewhite;
    width: 100%;
    height: 100%;
    -webkit-mask-image: url("~/assets/svg/ads-bg-left.svg");
    mask-image: url("~/assets/svg/ads-bg-left.svg");
  }
}

@media (max-width: 1400px) {
  .ads-card-left {
    width: 48%;
  }
}

@media (max-width: 768px) {
  .ads-card-left {
    width: 90%;
    height: 300px;
    margin-top: 1rem;
    margin: 0 auto;
    margin-bottom: 6px;
  }
}
</style>
