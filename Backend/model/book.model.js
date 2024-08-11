import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id:Number,
    name:String,
    author:String,
    title:String,
    image:String,
    price:Number,
    category:String
    
})

const Book = mongoose.model("Book",bookSchema);
export default Book;