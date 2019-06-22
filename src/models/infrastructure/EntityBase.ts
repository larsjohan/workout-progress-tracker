
export default abstract class EntityBase {
    public _id?: string;
    public createdDate?: Date;
    public updatedDate?: Date;

    constructor() {
        this._id = '';
        this.createdDate = new Date();
        this.updatedDate = new Date();
    }
}