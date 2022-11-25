import { Luchador } from './Luchador.js';
import { Personaje } from './Personaje.js';
import  {Escudero} from './Escudero.js';
import { Rey } from './Rey.js';

export class Asesor extends Personaje {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        img: string,
        public advises: Luchador | Rey | Asesor| Escudero
    ) {
        super(char_name, char_fam, char_age, img);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
        this.emoji = '🎓';
    }
}
