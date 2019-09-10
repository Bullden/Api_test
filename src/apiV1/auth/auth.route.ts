import { Router } from 'express';
import Controller from './auth.controller';

const user: Router = Router();
const controller = new Controller();

// Sign In
user.post('/login', controller.login);

// Register New User
user.post('/registration', controller.registration);

export default user;
