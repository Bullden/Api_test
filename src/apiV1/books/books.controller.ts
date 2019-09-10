import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
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

//   public update = async (req: Request, res: Response): Promise<any> => {
//     const { name, email, password } = req.body;
    
//     try {
//       const userUpdated = await Book.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: {
//             name,
//             email,
//             password
//           }
//         },
//         { new: true }
//       );
//       if (!userUpdated) {
//         return res.status(404).send({
//           success: false,
//           message: 'User not found',
//           data: null
//         });
//       }
//       res.status(200).send({
//         success: true,
//         data: userUpdated
//       });
//     } catch (err) {
//       res.status(500).send({
//         success: false,
//         message: err.toString(),
//         data: null
//       });
//     }
//   };

//   public remove = async (req: Request, res: Response): Promise<any> => {
//     try {
//       const user = await User.findByIdAndRemove(req.params.id);

//       if (!user) {
//         return res.status(404).send({
//           success: false,
//           message: 'User not found',
//           data: null
//         });
//       }
//       res.status(204).send();
//     } catch (err) {
//       res.status(500).send({
//         success: false,
//         message: err.toString(),
//         data: null
//       });
//     }
//   };
}
