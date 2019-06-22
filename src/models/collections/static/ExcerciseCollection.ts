import Excercise from '@/models/entities/static/Excercise';
import StaticCollectionBase from '@/models/infrastructure/StaticCollectionBase';

export default class ExcerciseCollection extends StaticCollectionBase<Excercise> {
    
    constructor() {
        super();
        let id = 1;
        this.add(new Excercise(String(id++), 'Squat', ''));
        this.add(new Excercise(String(id++), 'Bench press', ''));
        this.add(new Excercise(String(id++), 'Barbell row', ''));
        this.add(new Excercise(String(id++), 'Deadlift', ''));
        this.add(new Excercise(String(id++), 'Shoulder press', ''));
    }

}