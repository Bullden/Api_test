import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './user.controller';

const user: Router = Router();
const controller = new Controller();


user.get('/', controller.findAll);

user.get('/:id', verifyToken, controller.findOne);

user.put('/:id', controller.update);

user.delete('/:id', controller.remove);

export default user;
