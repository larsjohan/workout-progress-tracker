<template>
  <div class="log">
    <h1>Log-component</h1>
    <form @submit="saveWorkout">

      <input type="date" placeholder="Date" v-model="workout.workoutDate" required/>
      <input type="text" placeholder="Notes" v-model="workout.notes"/>

      <button type="button" @click="addExcercise">Add excercise</button>

      <div class="workout-excercise-wrapper" v-for="w of workout.excercises" :key="w._id">
        <select v-model="w.excercise" required>
          <option :value="undefined">Select excercise</option>
          <option v-for="e of availableExcercises" :key="e._id" :value="e">{{ e.name }}</option>
        </select>
        <input type="number" placeholder="Sets" v-model="w.sets" required/>
        <input type="number" placeholder="Reps" v-model="w.reps" required/>
        <input type="number" placeholder="Weight" v-model="w.weight" required/>
        <input type="text" placeholder="Notes" v-model="w.notes"/>
      </div>

      <button type="submit">Save workout</button>
      <button type="button" @click="log">Debug</button>

    </form>

    <div class="log-wrapper">

      <div v-for="logEntry of previousWorkouts" :key="logEntry._id">
        <p>{{ logEntry.workoutDate }} - {{ logEntry.notes }}</p>

        <div class="entry-workouts-wrapper" v-for="eEntry of logEntry.excercises" :key="eEntry._id">
          <p>{{ eEntry.excercise.name }} -- {{ eEntry.sets }} sets -- {{ eEntry.reps }} reps -- {{ eEntry.notes }} </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Workout from '../models/entities/dynamic/Workout';
import Excercise from '../models/entities/static/Excercise';
import WorkoutExcercise from '../models/entities/dynamic/WorkoutExcercise';

@Component({})
export default class LogComponent extends Vue {

  private availableExcercises: Array<Excercise> = [];

  private workout: Workout = new Workout();

  private previousWorkouts: Array<Workout> = [];

  constructor() {
    super();
    this.workout.excercises.push(new WorkoutExcercise());
  }

  public addExcercise(): void {
    const w = new WorkoutExcercise();
    w.order = this.workout.excercises.length;
    this.workout.excercises.push(w);
  }


  public async saveWorkout(): Promise<void> {
    const savedWorkout: Workout = await this.$db.workouts.save(this.workout);
  }

  public async mounted(): Promise<void> {
    this.availableExcercises = this.$db.exercises.getAll();
    this.previousWorkouts = await this.$db.workouts.getAll();
  }

  public log(): void {
    console.log(this.previousWorkouts);
  }

}
</script>

<style lang="scss" scoped>

  .workout-excercise-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: 832px; 
  }

  .entry-workouts-wrapper {
    margin-left: 40px;
  }

</style>
