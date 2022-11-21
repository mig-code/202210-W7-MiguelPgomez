import { personajes } from './scripts/personajes.js';
import { Rey } from './scripts/Rey.js';
import { Luchador } from './scripts/Luchador.js';
import { Asesor } from './scripts/Asesor.js';
import { Escudero } from './scripts/Escudero.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        //  const templates = [headerTemplate, footerTemplate];

        const characterTemplate = personajes.map((item) => {
            return `
                <li class="character col">
                    <div class="card character__card">
                        <img
                            src="${item.img}"
                            alt="${item.char_name} ${item.char_fam}"
                            class="character__picture card-img-top"
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
                                    <button class="character__action btn">
                                        habla
                                    </button>
                                    <button class="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${item.emoji}</i>
                    </div>
                 </li>
                    `;
        }).join('');
        const renderedHtmlString = `<ul class="characters-list row list-unstyled">
               ${characterTemplate}
                   
            </ul>
       `;

        // RENDER HTML
        const slots = document.querySelector('slot');
        if (!slots) return;
        slots.outerHTML = renderedHtmlString;
    });
})();
