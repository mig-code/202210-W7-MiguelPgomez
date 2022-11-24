import { PersonajeType } from '../classes/Personaje.js';
import { addDeathListeners, addSpeakListeners } from './eventlisteners.js';
import { layoutTemplate } from '../templates/layaout.js';
import { arrayOfCharactersTemplate } from '../templates/arrayOfCharactersTemplate.js';
import { comunicationsTemplate } from '../templates/comunicationsTemplate.js';

// RENDER FUCTIONS

export function renderLayout() {
    const root = document.querySelector('slot');
    if (root) {
        root.outerHTML = layoutTemplate;
    }
    renderCharactersContainer();
}

export function renderCharactersContainer() {
    const appContainer = document.querySelector('.app');
    if (appContainer) {
        appContainer.innerHTML = `
        <ul class="characters-list row list-unstyled">
            ${arrayOfCharactersTemplate().join('')}     
        </ul>
        `;
    }
    addDeathListeners();
    addSpeakListeners();
}
export function renderComunications(char: PersonajeType) {
    const comunicationsEl = document.querySelector('.comunications');
    if (comunicationsEl) {
        comunicationsEl.innerHTML = comunicationsTemplate(char);
    }
}

export function renderCharacter(char: number) {
    const characaterColEl = document.querySelector(`.character-col${char}`);
    if (characaterColEl) {
        //
        characaterColEl.outerHTML = arrayOfCharactersTemplate()[char];
    }
}
