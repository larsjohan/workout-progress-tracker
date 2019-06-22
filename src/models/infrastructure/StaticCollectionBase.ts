import EntityBase from "./EntityBase";

export default class StaticCollectionBase<T extends EntityBase> {
    
    protected _data: Array<T>;

    constructor(data?: Array<T>) {
        if(!!data)
            this._data = data;
        else 
            this._data = [];
    }

    public getAll(): Array<T> {
        return this._data;
    }

    public getById(id: string): T | undefined {
        return this._data.find(d => d._id === id);
    }

    protected add(entry: T): void {
        this._data.push(entry);
    }

}