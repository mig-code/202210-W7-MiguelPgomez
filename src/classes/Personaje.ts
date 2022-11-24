export type PersonajeType = {
    char_name: string;
    char_fam: string;
    char_age: number;
    img: string;
    isAlive: boolean;
    message: string;
    tvShow: string;
    emoji: string;
    comunicate: () => string;
    death: () => void;
};
export class Personaje {
    constructor(
        public char_name: string,
        public char_fam: string,
        public char_age: number,
        public img: string,
        public isAlive: boolean = true,
        public message: string = '',
        public tvShow: string = 'Game of Thrones',
        public emoji: string = ''
    ) {}
    death() {
        this.isAlive = false;
    }
    comunicate() {
        return this.message;
    }
}
