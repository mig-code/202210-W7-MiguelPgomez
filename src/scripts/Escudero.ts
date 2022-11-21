import { Personaje } from './Personaje.js';
export class Escudero extends Personaje {
    
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        isAlive: boolean,
        img: string,
        public serve: string,
        public fidelity: number
    ) {
        super(char_name, char_fam, char_age, isAlive, img);
        this.message='Soy un loser';
        this.emoji = '🛡';

    }
}
