import { personajes } from './classes/personajes.js';
import { Rey } from './classes/Rey.js';
import { Luchador } from './classes/Luchador.js';
import { Asesor } from './classes/Asesor.js';
import { Escudero } from './classes/Escudero.js';

//EVENT HANDLERS

function handleClickDeath(event: Event) {
    personajes[event.target.value].death();
    RenderCharactersContainer();
}
function handleClickSpeak(event: any) {
    console.log('click speak');
    const character = personajes[event.target.value];
    renderComunications(character);
    const communicationsEl = document.querySelector('.comunications');
    if (communicationsEl) {
        communicationsEl.classList.add('comunications--on');
    }

    setTimeout(() => {
        if (communicationsEl) {
            communicationsEl.classList.remove('comunications--on');
        }
    }, 3000);
}

//TEMPLATES

const LayoutTemplate = `<div class="app-container">
            <slot name="rendered-components"></slot>
        </div>
        <div class="comunications ">
           
        </div>`;
function createCharacterTemplate() {
    const characterTemplate = personajes
        .map((item, index) => {
            return `
                <li class="character col">
                    <div class="card character__card">
                        <img
                            src="${item.img}"
                            alt="${item.char_name} ${item.char_fam}"
                            class="character__picture card-img-top
                                ${
                                    !item.isAlive
                                        ? 'character__picture--death'
                                        : ''
                                }
                            "
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.char_name} ${item.char_fam}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${item.char_age} años</li>
                                    <li>
                                        Estado:
                                        ${
                                            item.isAlive
                                                ? ' <i class="fas fa-thumbs-up"></i>'
                                                : '<i class="fas fa-thumbs-down"></i>'
                                        }
                                       
                                        
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                
                                ${
                                    item instanceof Rey
                                        ? `<li>Años de reinado: ${item.regnalYears}</li>`
                                        : ''
                                }
                                ${
                                    item instanceof Luchador
                                        ? `<li>Arma: ${item.weapon}</li>
                                    <li>Destreza: ${item.skill}</li>`
                                        : ''
                                }
                                ${
                                    item instanceof Asesor
                                        ? `<li>Asesora a: ${item.advises}</li>`
                                        : ''
                                }
                                ${
                                    item instanceof Escudero
                                        ? `<li>Sirve a: ${item.serve}</li>
                                        <li>Peloteo: ${item.fidelity}</li>`
                                        : ''
                                }

                                    <li>${item.message}</li>
                                </ul>
                                <div class="character__actions">
                                ${
                                    item.isAlive
                                        ? ` <button  class="character__action character__action--death btn" value=${index}>
                                        Muere
                                            </button>`
                                        : ``
                                }
                                ${
                                    item.isAlive
                                        ? ` <button class="character__action character__action--speak btn" value=${index}>
                                        Habla
                                            </button>`
                                        : ``
                                }
             
                            </div>
                            </div>
                        </div>
                        <i class="emoji">${item.emoji}</i>
                    </div>
                    </li>
                `;
        })
        .join('');
    const renderedHtmlString = `
    <ul class="characters-list row list-unstyled">
            ${characterTemplate}    
            </ul>
    
        `;
    return renderedHtmlString;
}

function comunicationsTemplate(char: any) {
    const renderedHtmlString = ` 
            <p class="comunications__text display-1">
                ${char.message}
            </p>
            <img
                class="comunications__picture"
                src="${char.img}"
                alt="${char.char_name} ${char.char_fam}"
            />
        `;
    return renderedHtmlString;
}

// ADD LISTENERS FUNCTIONS

function addDeathListeners() {
    const buttons = document.querySelectorAll('.character__action--death');
    buttons.forEach((button) => {
        button.addEventListener('click', handleClickDeath);
    });
}
function addSpeakListeners() {
    const buttons = document.querySelectorAll('.character__action--speak');
    buttons.forEach((button) => {
        button.addEventListener('click', handleClickSpeak);
    });
}

// RENDER FUCTIONS
function RenderLayout() {
    const root = document.querySelector('slot');
    if (root) {
        root.outerHTML = LayoutTemplate;
    }
    RenderCharactersContainer();
}

function RenderCharactersContainer() {
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
        appContainer.innerHTML = createCharacterTemplate();
    }
    addDeathListeners();
    addSpeakListeners();
}
function renderComunications(char: any) {
    const comunicationsEl = document.querySelector('.comunications');
    if (comunicationsEl) {
        comunicationsEl.innerHTML = comunicationsTemplate(char);
    }
}

// START APP
RenderLayout();
