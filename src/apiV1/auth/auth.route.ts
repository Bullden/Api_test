import { Router } from 'express';
import Controller from './auth.controller';

const user: Router = Router();
const controller = new Controller();
user.post('/login', controller.login);
user.post('/registration', controller.registration);

export default user;
