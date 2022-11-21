import { Personaje } from "./Personaje.js";
export class Rey extends Personaje {
    public static message = 'Vais a morir todos';
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        isAlive: boolean,
        img: string,
        
        public regnalYears: number 
    ) {
        super(char_name, char_fam, char_age,isAlive, img, Rey.message);
        
    }
}
