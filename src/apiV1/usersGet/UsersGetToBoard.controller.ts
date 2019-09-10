import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
const UsersGet = require('./usersGet.model.ts');
import Role from '../usersInRoles/usersInRoles.model';

export default class BookController {

    public usersGet = async (req: Request, res: Response): Promise<any> => {
      const { name, id, email } = req.body;
      try {
        const usersGet = await UsersGet.find();
        console.log(usersGet)
  
        if (!usersGet) {
          return res.status(404).send({
            success: false,
            message: 'Users not found!!!!'
          });
        }
  
        const token = usersGet
  
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
}