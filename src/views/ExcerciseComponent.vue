<template>
  <div class="excercise-wrapper">
    <div class="excercise" v-for="e in excercises" :key="e._id">
      <p>{{e.name}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Excercise from '../models/entities/static/Excercise';

@Component({})
export default class ExcerciseComponent extends Vue {

  private excercises: Array<Excercise> = [];


  mounted(): void {
    this.excercises = this.$db.exercises.getAll();
    console.log(this.excercises);
  }

}
</script>

<style lang="scss" scoped>

</style>
