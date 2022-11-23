
export class Personaje {
    constructor(
        public char_name: string,
        public char_fam: string,
        public char_age: number,
        public img: string,
        public isAlive: boolean=true,
        public message: string = '',
        public tvShow: string = 'Game of Thrones',
        public emoji: string = ''
    ) {

    }
    death() {
        this.isAlive = false;
    }
    comunicate() {
        return this.message;
    }
}
