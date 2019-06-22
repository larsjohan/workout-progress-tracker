import Workout from './Workout';
import Excercise from '../static/Excercise';

export default class WorkoutExcercise {

    public order: number = 0;
    public excercise?: Excercise;
    public sets: number = 0;
    public reps: number = 0;
    public weight: number = 0;
    public notes: string = '';
}