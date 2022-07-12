<template>
  <i
    id="1"
    :class="[
      this.checked1 ? 'bi-star-fill text-yellow-300' : 'bi-star text-gray-400',
    ]"
    class="bi"
    @click="this.switch(1)"
  ></i>
  <i
    id="2"
    :class="[
      this.checked2 ? 'bi-star-fill text-yellow-300' : 'bi-star text-gray-400',
    ]"
    class="bi"
    @click="this.switch(2)"
  ></i>
  <i
    id="3"
    :class="[
      this.checked3 ? 'bi-star-fill text-yellow-300' : 'bi-star text-gray-400',
    ]"
    class="bi"
    @click="this.switch(3)"
  ></i>
  <i
    id="4"
    :class="[
      this.checked4 ? 'bi-star-fill text-yellow-300' : 'bi-star text-gray-400',
    ]"
    class="bi"
    @click="this.switch(4)"
  ></i>
  <i
    id="5"
    :class="[
      this.checked5 ? 'bi-star-fill text-yellow-300' : 'bi-star text-gray-400',
    ]"
    class="bi"
    @click="this.switch(5)"
  ></i>
</template>

<script>
export default {
  data() {
    return {
      stars: [1, 2, 3, 4, 5],

      checked1: false,

      checked2: false,

      checked3: false,

      checked4: false,

      checked5: false,
    };
  },
  methods: {
    switch(number) {
      if (number === 1) {
        this.checked1 = true;
        this.checked2 = false;
        this.checked3 = false;
        this.checked4 = false;
        this.checked5 = false;
      }
      if (number === 2) {
        this.checked1 = true;
        this.checked2 = true;
        this.checked3 = false;
        this.checked4 = false;
        this.checked5 = false;
      }
      if (number === 3) {
        this.checked1 = true;
        this.checked2 = true;
        this.checked3 = true;

        this.checked4 = false;
        this.checked5 = false;
      }
      if (number === 4) {
        this.checked1 = true;
        this.checked2 = true;
        this.checked3 = true;
        this.checked4 = true;

        this.checked5 = false;
      }
      if (number === 5) {
        this.checked1 = true;
        this.checked2 = true;
        this.checked3 = true;
        this.checked4 = true;
        this.checked5 = true;
      }

      // ("this.unchecked" + number) = !("this.unchecked" + number)
      // "this.checked" + number;
      // unbase = !unbase;
      // console.log(unbase);
      // console.log(this.unchecked1);
    },
  },
};
</script>

<style>
</style>
