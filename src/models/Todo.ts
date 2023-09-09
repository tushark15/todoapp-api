import mongoose, {Schema, Document, mongo} from "mongoose";

export interface Todo_interface extends Document{
    title: string;
    completed: boolean;
}

const TodoSchema = new Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false},
})

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo