import {Mongoose} from "mongoose"
import {Express} from "express"

export class ConnectionDB{
    db: Mongoose=new Mongoose();
    constructor(cs:string){
        this.db.connect(cs);
    }
}