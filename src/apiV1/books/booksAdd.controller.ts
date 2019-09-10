import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
const Book = require('./books.model.ts');
import Role from '../usersInRoles/usersInRoles.model';


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
        // id: user._id,
        // name: user.name,
      
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

      // const userRoles: any = await Role.find();
      // const userRolesId = userRoles[0]._id;
      // const userArr = userRoles[0].user;
      // const adminArr = userRoles[0].admin;

      // userArr.push(newUser._id)

      // const rolesUpdated = await Role.findByIdAndUpdate(
      //   userRolesId,
      //   {
      //     $set: {
      //       admin: adminArr,
      //       user: userArr
      //     }
      //   },
      //   { new: true }
      // );

    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };
  public bookDelete = async (req: Request, res: Response): Promise<any> => {
    try {
      const book = await Book.findOneAndDelete(req.params.id);

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
