import { Router } from 'express';
import Controller from './usersGetToBoard.controller';

const usersGet: Router = Router();
const controller = new Controller();

usersGet.get('/', controller.usersGet);

export default usersGet;