<template>
  <div v-show="this.renderPlaces"><Places /></div>

  <div
    v-show="!this.renderPlaces"
    class="container h-screen p-0 m-0 mb-0 bg-white rounded-md"
  >
    <div
      class="shadow overflow-hidden py-3 sm:rounded-md mt-[15] text-[#00345c]"
    >
      <div class="grid grid-cols-2 animate-pulse">
        <div
          class="col-span-2 mx-auto mt-2 mb-2 bg-gray-300 rounded-md h-7 w-60"
        ></div>

        <div
          class="
            w-20
            h-4
            col-span-2
            mt-4
            mb-2
            ml-[2.5rem]
            bg-gray-300
            rounded-md
          "
        ></div>
        <div
          class="w-[35rem] mx-auto h-4 col-span-2 bg-gray-300 rounded-md"
        ></div>
        <div
          class="
            w-20
            ml-[2.5rem]
            h-4
            col-span-2
            mt-4
            mb-2
            bg-gray-300
            rounded-md
          "
        ></div>
        <div
          class="w-[35rem] mx-auto h-4 col-span-2 bg-gray-300 rounded-md"
        ></div>
        <div
          class="
            w-20
            ml-[2.5rem]
            h-4
            col-span-2
            mt-4
            mb-2
            bg-gray-300
            rounded-md
          "
        ></div>
        <div
          class="w-[35rem] mx-auto h-4 col-span-2 bg-gray-300 rounded-md"
        ></div>
        <div
          class="
            w-20
            ml-[2.5rem]
            h-4
            col-span-2
            mt-4
            mb-2
            bg-gray-300
            rounded-md
          "
        ></div>
        <div
          class="w-[35rem] mx-auto h-4 col-span-2 bg-gray-300 rounded-md"
        ></div>
        <div
          class="
            h-7
            mb-8
            col-span-2
            mx-auto
            mt-10
            bg-gray-300
            rounded-md
            w-[28rem]
          "
        ></div>
        <div
          class="
            h-[6rem]
            mt-[10rem]
            col-span-2
            mx-auto
            bg-gray-300
            rounded-md
            w-[35rem]
          "
        ></div>
        <div
          class="h-5 mt-10 col-span-2 mx-auto bg-gray-300 rounded-md w-[18rem]"
        ></div>
        <div
          class="h-20 mt-10 col-span-2 mx-auto bg-gray-300 rounded-md w-[24rem]"
        ></div>
      </div>
    </div>
  </div>
</template> 

<script>
import Places from "./Places.vue";
export default {
  components: {
    Places,
  },
  data() {
    return {
      renderPlaces: false,
    };
  },
  mounted() {
    setTimeout(this.renderPlacess, 2000);
  },
  methods: {
    renderPlacess() {
      this.renderPlaces = true;
    },
  },
};
</script>

<style></style>
