import { createThought } from '../lib/db';
void createThought({
	title: 'hello',
	message: 'hoy',
	content: 'hola hola hola',
	createdOn: new Date()
});
