export class Personaje {
    constructor(
        public char_name: string,
        public char_fam: string,
        public char_age: number,
        public isAlive: boolean = true,
        public img: string,
        public message: string = '',
        public tvShow: string = 'Game of Thrones',
        public emoji: string = ''
    ) {}
    death() {
        this.isAlive = false;
    }
}
