import EntityBase from '@/models/infrastructure/EntityBase';
import WorkoutExcercise from './WorkoutExcercise';

export default class Workout extends EntityBase {

    public workoutDate: Date = new Date();
    public notes: string = '';
    
    public excercises: Array<WorkoutExcercise> = [];

}