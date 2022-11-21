import { Personaje } from './Personaje.js';

const personaje1 = new Personaje('Jaime', 'Lannister', 'img/jaime.jpg');
const personaje2 = new Personaje('Daenerys', 'Targaryen', 'img/daenerys.jpg');
export const personajes= [personaje1, personaje2];
console.log(personajes);
console.log(personaje1.tvShow);

