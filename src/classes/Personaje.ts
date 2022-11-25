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
    tvShow = 'Game of Thrones';
    public emoji= '';
    constructor(
        public char_name: string,
        public char_fam: string,
        public char_age: number,
        public img: string,
        public isAlive: boolean = true,
        public message: string = ''
    ) {}
    death() {
        this.isAlive = false;
    }
    comunicate() {
        return this.message;
    }
}
