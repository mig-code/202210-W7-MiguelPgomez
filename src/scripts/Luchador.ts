import { Personaje } from './Personaje.js';
export class Luchador extends Personaje {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        isAlive: boolean,
        img: string,
        public weapon: string,
        public skill: number
    ) {
        super(char_name, char_fam, char_age, isAlive, img);
        this.message = 'Primero pego y luego pregunto';
        this.emoji = '🗡';
    }
}
