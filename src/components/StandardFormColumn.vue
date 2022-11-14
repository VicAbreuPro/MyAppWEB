<template>
  <div class="row">
    <div v-for="(e, i) in fields" v-bind:key="i" v-bind:class="setupClasses(e)">
      {{ e }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StandardFormColumn",
  props: {
    fields: Array,
  },
  setup() {
    function setupClasses(e) {
      console.log(e);
      let value = "";
      if (e.xs !== undefined) {
        value += "col-xs-" + e.xs;
      }
      if (e.sm !== undefined) {
        if (value.length > 0) {
          value += " ";
        }
        value += "col-sm-" + e.sm;
      }
      if (e.md !== undefined) {
        if (value.length > 0) {
          value += " ";
        }
        value += "col-md-" + e.md;
      }
      if (e.lg !== undefined) {
        if (value.length > 0) {
          value += " ";
        }
        value += "col-lg-" + e.lg;
      }
      if (e.xl !== undefined) {
        if (value.length > 0) {
          value += " ";
        }
        value += "col-xl-" + e.xl;
      }

      return value;
    }

    return {
      setupClasses,
    };
  },
};
</script>
