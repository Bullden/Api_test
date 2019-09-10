import { Router } from 'express';
import Controller from './usersGetToBoard.controller';

const usersGet: Router = Router();
const controller = new Controller();

// Sign In
usersGet.get('/', controller.usersGet);

// Register New User
// user.post('/', controller.registration);

export default usersGet;