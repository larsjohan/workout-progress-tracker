import DynamicCollectionBase from '@/models/infrastructure/DynamicCollectionBase';
import Workout from '@/models/entities/dynamic/Workout';

export default class WorkoutCollection extends DynamicCollectionBase<Workout> {
    

    constructor() {
        super("Workout");
    }

}