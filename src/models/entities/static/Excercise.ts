import EntityBase from '../../infrastructure/EntityBase';

export default class Excercise extends EntityBase {
    
    public name: string;
    public description: string;

    constructor(id: string, name: string, description: string) {
        super();
        this._id = id;
        this.name = name;
        this.description = description;
    }

}