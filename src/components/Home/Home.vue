<template lang="html">
  <section>
    <h4>Home</h4>
  </section>
</template>

<script>
import { mapGetters }               from "vuex";
import moment                       from "moment";

export default {
  data(){
    return {
    }
  },
  mounted(){
    let hellyes = this.$gun.get("gun");
    hellyes.put({
      yo: "howdy"
    });
    hellyes.on((data, key) => {
      console.log(`howdy: `, data)
      console.log(key)
    })

  }
}
</script>

<style lang="css">

</style>
