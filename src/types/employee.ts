import {Document} from "mongoose";
import { IDevice } from "./device";

export interface IEmployee extends Document{
    _id: number,
    name: string,
    email:string
    devices?:[IDevice]
}