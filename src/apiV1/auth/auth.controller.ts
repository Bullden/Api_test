import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
const User = require('../users/user.model.ts');
import Role from '../usersInRoles/usersInRoles.model';


export default class UserController {
  public login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user)

      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'User not found!!!!'
        });
      }

      const matchPasswords = await bcrypt.compare(password, user.password);
      if (!matchPasswords) {
        return res.status(401).send({
          success: false,
          message: 'Not authorized'
        });
      }

      // const id = user._id

      // const role: any = await Role.find();
      // const adminArr = role[0].admin;
      // // const adminCheck: any = adminArr.indexOf(id)
      // let roles = ''

      // if (adminCheck >= 0) {
      //   roles = 'admin'
      // } else {
      //   roles = 'user'
      // }

      const token = await jwt.sign({ user }, config.JWT_ENCRYPTION, {
        expiresIn: config.JWT_EXPIRATION
      });

      res.status(200).send({
        success: true,
        message: 'Token generated Successfully',
        data: token,
        // id: user._id,
        // name: user.name,
      
      });
      console.log('token:',token)
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };

  public registration = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, config.SALT_ROUNDS);

      const userCheck : any = await User.findOne({ email: req.body.email });

      if (userCheck) {
        return res.status(404).send({
          success: false,
          message: 'Пользователь уже зарегистрирован'
        });
      }

      const user = new User({
        name,
        email,
        password: hash,
        role : "5d7101271c9d4400006eedb8"
      });

      const newUser = await user.save();

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

      res.status(201).send({
        success: false,
        message: 'User Successfully created',
        data: newUser
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };
}
