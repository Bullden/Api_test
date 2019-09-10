import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
const UsersGet = require('./usersGet.model');

export default class UserController {
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const usersGet = await UsersGet.find();
      if (!usersGet) {
        return res.status(404).send({
          success: false,
          message: 'users not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: usersGet
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
      const usersGet = await UsersGet.findById(req.params.id,);
      if (!usersGet) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: usersGet
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