import { Router } from 'express';
import Controller from './booksAdd.controller';

const book: Router = Router();
const controller = new Controller();


book.post('/', controller.bookAdd);

book.get('/', controller.bookGet);

book.delete('/:id',controller.bookDelete)

export default book;