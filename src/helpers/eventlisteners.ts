import { personajes } from './personajes.js';
import { renderCharacter, renderComunications } from './renders.js';

//EVENT HANDLERS

const handleClickDeath = (event: Event) => {
    //https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript

    const character = (event.target as HTMLInputElement).value;
    const characterIndex: number = parseInt(character);
    personajes[characterIndex].death();

    // renderCharactersContainer();
    renderCharacter(characterIndex);
};
const handleClickSpeak = (event: Event) => {
    const character = (event.target as HTMLInputElement).value;
    const characterIndex = parseInt(character);
    renderComunications(personajes[characterIndex]);
    const communicationsEl = document.querySelector('.comunications');
    if (communicationsEl) {
        communicationsEl.classList.add('comunications--on');
    }

    setTimeout(() => {
        if (communicationsEl) {
            communicationsEl.classList.remove('comunications--on');
        }
    }, 2000);
};

// ADD LISTENERS FUNCTIONS

export function addDeathListeners() {
    const buttons = document.querySelectorAll('.character__action--death');
    buttons.forEach((button) => {
        button.addEventListener('click', handleClickDeath);
    });
}
export function addSpeakListeners() {
    const buttons = document.querySelectorAll('.character__action--speak');
    buttons.forEach((button) => {
        button.addEventListener('click', handleClickSpeak);
    });
}
