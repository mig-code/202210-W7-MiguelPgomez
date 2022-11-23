import { Personaje } from './Personaje.js';
export class Escudero extends Personaje {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        img: string,
        public serve: string,
        public fidelity: number
    ) {
        super(char_name, char_fam, char_age, img);
        this.message = 'Soy un loser';
        this.emoji = '🛡';
    }
}
