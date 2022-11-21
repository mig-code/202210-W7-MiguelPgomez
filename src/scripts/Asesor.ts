import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        isAlive: boolean,
        img: string,
        public advises: string
    ) {
        super(char_name, char_fam, char_age, isAlive, img);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
        this.emoji = '🎓';
    }
}
