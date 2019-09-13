import { Request, Response } from 'express';

const Book = require('./books.model.ts');
export default class BookController {

  public bookGet = async (req: Request, res: Response): Promise<any> => {
    const { nameBook, cost, description } = req.body;
    try {
      const book = await Book.find();
      console.log(book)

      if (!book) {
        return res.status(404).send({
          success: false,
          message: 'Book not found!!!!'
        });
      }

      const token = book

      res.status(200).send({
        success: true,
        message: 'Token generated Successfully',
        data: token,
      });
      console.log('tokenBook:',token)
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };

  public bookAdd = async (req: Request, res: Response): Promise<any> => {
    const { cost, nameBook, description } = req.body;
    try {
      
      const book = new Book({
        cost,
        nameBook,
        description,
      });

      const newBook = await book.save();
      console.log('newBook:',newBook)

      res.status(200).send({
        success: true,
        message: 'Successfully added'
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };
  public bookDelete = async (req: Request, res: Response): Promise<any> => {
    try {
      const book = await Book.findOneAndDelete({_id :req.params.id});

      if (!book) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
          data: null
        });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
