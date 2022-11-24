import { Personaje } from '../classes/Personaje.js';
export function comunicationsTemplate(char: Personaje): string {
    const renderedHtmlString = ` 
            <p class="comunications__text display-1">
                ${char.comunicate()}
            </p>
            <img
                class="comunications__picture"
                src="${char.img}"
                alt="${char.char_name} ${char.char_fam}"
            />
        `;
    return renderedHtmlString;
}
