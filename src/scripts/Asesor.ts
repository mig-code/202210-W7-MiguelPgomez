import { Personaje } from './Personaje.js';
export class Luchador extends Personaje {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        isAlive: boolean,
        img: string,
        public message: string = 'No sé por qué, pero creo que voy a morir pronto',
        public advises: string,

    ) {
        super(char_name, char_fam, char_age, isAlive, img);
    }
}
