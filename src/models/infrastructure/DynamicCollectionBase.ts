import { IStorageDriverExtended, ElectronStorage } from 'tedb-electron-storage';

import { Datastore, Cursor, IupdateOptions, IindexOptions, Index } from 'tedb';
import EntityBase from './EntityBase';

export default class DynamicCollectionBase<T extends EntityBase> {
    private static readonly DB_NAME: string = 'WorkoutProgressTracker';

    private readonly collectionName: string;
    private readonly storage: IStorageDriverExtended;
    private readonly datastore: Datastore;
    
    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.storage = new ElectronStorage(DynamicCollectionBase.DB_NAME, collectionName);
        this.datastore = new Datastore({storage: this.storage});
    }  

    /**
     * Get all entities in this collection
     */
    public async getAll(): Promise<Array<T>> {
        return await this.datastore.find().exec() as Array<T>;
    }

    /**
     * 
     * @param id Get one entity specified by it's ID.
     * @returns {T | null} The entity if found, null otherwise.
     */
    public async getById(id: string): Promise<T | null> {
        const docs: Array<T> = await this.datastore.find({_id: id}).limit(1).exec() as Array<T>;
        return (!!docs && docs.length === 1) ? docs[0] : null;
    }


    /**
     * Saves an entity and returns the saved instance.
     * @param document The document to save
     */
    public async save(document: T): Promise<T> {
        const savedDocument: T = await this.datastore.insert(document) as T;
        this.persistIndices();
        return savedDocument;
    }

    /**
     * Get all documents matching query. uses indices if any
     * @param query
     * @returns {Cursor}
     */
    public async find(query: any): Promise<Array<T>> {
        return await this.datastore.find(query).exec() as Array<T>;
    }

    /**
     * Get the count of a find query
     * @param query
     * @returns {Cursor}
     */
    public async count(query?: any): Promise<number> {
        return await this.datastore.count(query).exec() as number;
    }

    /**
     * Overwrite an existing entity by the provided entity
     * @param body The body containint the new values to store
     */
    public async update(body: T): Promise<T> {
        if(!body || !body._id) return Promise.reject("Missing body");
        body.updatedDate = new Date();
        const updated = await this.datastore.update({_id: body._id}, {$set: body}, {returnUpdatedDocs: true, exactObjectFind: true, multi: false, upsert: false});
        this.persistIndices();
        return updated;
    }

    /**
     * Remove an existing entity by ID
     * @param id The ID of the entity to remove
     */
    public async remove(id: string): Promise<number> {
        const removed: number = await this.datastore.remove({_id: id});
        this.datastore.sanitize();
        this.persistIndices();
        return removed;
    }

    /**
     * Create index on a field of a document. can be nested 'path.to.key'
     * @param options - fieldName, unique, compareKeys, checkKeyEquality
     * @returns {Promise<null>}
     */
    protected async createIndex(options: IindexOptions): Promise<null> {
        return await this.datastore.ensureIndex(options);
    }

    /**
     * Deletes an index from memory and from storage
     * @param fieldName
     * @returns {Promise<null>}
     */
    protected async removeIndex(fieldName: string): Promise<null> {
        await this.datastore.removeIndex(fieldName);
        return await this.storage.removeIndex(fieldName);
    }

    /**
     * Saves all indices
     */
    protected async persistIndices(): Promise<any> {
        const indices: any = await this.getIndices();

        const persistedIndices: Array<Promise<null>> = [];                    
        
        indices.forEach((v: Index, k: string) => {
            persistedIndices.push(this.datastore.saveIndex(k));
        });

        return Promise.all(persistedIndices);
    }

    /**
     * Persist an index to storage
     * @param fieldName
     * @returns {Promise<null>}
     * @constructor
     */
    protected persistIndex(fieldName: string): Promise<null> {
        return this.datastore.saveIndex(fieldName);
    }

    /**
     * Insert a stored index into the datastore, best used with
     * fetch index then, ensureIndex, then load Index if exists.
     * @param key
     * @param index
     * @returns {Promise<null>}
     * @constructor
     */
    protected async loadIndex(key: string, index: any[]): Promise<null> {
        return this.datastore.insertIndex(key, index);
    }

    /**
     * Return the indices of this datastore is a Map
     * @returns {Promise<any>}
     */
    protected async getIndices(): Promise<any> {
        return this.datastore.getIndices();
    }
}