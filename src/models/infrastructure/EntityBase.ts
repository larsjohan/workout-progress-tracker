
export default abstract class EntityBase {
    _id?: string;
    createdDate?: Date;
    updatedDate?: Date;

    constructor() {
        this._id = '';
        this.createdDate = new Date();
        this.updatedDate = new Date();
    }
}