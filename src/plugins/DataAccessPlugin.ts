
export default class DataAccessPlugin {

    public readonly exercises: ExcerciseCollection;
    public readonly workouts: WorkoutCollection;
    
    constructor() {
        this.exercises = new ExcerciseCollection();
        this.workouts = new WorkoutCollection();
    }

    install(vue: any, options: any) {
        vue.prototype.$db = this;
    }
}


// Declare custom types on the Vue-instance
import Vue from 'vue';
import ExcerciseCollection from '@/models/collections/static/ExcerciseCollection';
import WorkoutCollection from '@/models/collections/dynamic/WorkoutCollection';

declare module 'vue/types/vue' {
    
    interface Vue {
        $db: DataAccessPlugin   
    }
}