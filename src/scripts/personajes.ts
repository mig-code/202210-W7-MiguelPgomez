import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

const joffreyBaratheon = new Rey(
    'Joffrey',
    'Baratheon',
    13,
    true,
    'img/joffrey.jpg',
    2
);
const jaimeLannister = new Luchador(
    'Jaime',
    'Lannister',
    35,
    true,
    'img/jaime.jpg',
    'Daga',
    5
);
const daenerysTargaryen = new Luchador(
    'Daenerys',
    'Targaryen',
    22,
    true,
    'img/daenerys.jpg',
    'Dragón',
    10
);
const tyrionLannister = new Asesor(
    'Tyrion',
    'Lannister',
    39,
    true,
    'img/tyrion.jpg',
    'Daenerys'
);
const bronn = new Escudero('Bronn', '', 42, true, 'img/bronn.jpg', 'Jaime', 10);

export const personajes = [
    joffreyBaratheon,
    jaimeLannister,
    daenerysTargaryen,
    tyrionLannister,
    bronn,
];
console.log(personajes);

// Joffrey Baratheon (rey),
// Jaime Lannister (luchador),
// Daenerys Targaryen (luchadora),
// Tyrion Lannister (asesor de Daenerys) y
// Bronn (escudero de Jaime).)
