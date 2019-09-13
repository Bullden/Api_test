import { Request, Response } from 'express';

const Book = require('./books.model');
export default class BookController {
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const books = await Book.find();
      if (!books) {
        return res.status(404).send({
          success: false,
          message: 'books not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: books
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {
      const book = await Book.findById(req.params.id,);
      if (!book) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: book
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}