import {IEmployee} from "../types/employee"
import {model, Schema} from "mongoose"

const employeeSchema: Schema = new Schema(
    {   
        _id: {
            type: Number,
            required: true
       
        },
        name: {
            type: String,
            required: true,
            maxlength: 255,
            minlength:3,

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        devices: [
            {
              type: Schema.Types.ObjectId,
              ref: "Device"
            }
          ]
        
    },
    {
        timestamps: true
    }
    
)

export default model<IEmployee>("Employeer",employeeSchema)