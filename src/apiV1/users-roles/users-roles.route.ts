import { Router } from 'express';
import Controller from './users-roles.controller';

const usersRoles: Router = Router();
const controller = new Controller();

usersRoles.post('/addRole', controller.addRole);

export default usersRoles;
