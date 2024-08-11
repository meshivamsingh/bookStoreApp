import Book from "../model/book.model.js";

export const getBook=async(rer,res)=>{
    try {
        const book= await Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
}