import { personajes } from '../helpers/personajes.js';
import { Rey } from '../classes/Rey.js';
import { Luchador } from '../classes/Luchador.js';
import { Asesor } from '../classes/Asesor.js';
import { Escudero } from '../classes/Escudero.js';

const charactersContainerTemplate = () => {
    const characterTemplate: string[] = personajes.map((item, index) => {
        return `
                <li class="character col character-col${index}">
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
                                </ul>
                                <div class="character__actions">
                                ${
                                    item.isAlive
                                        ? ` <button class="character__action character__action--death btn" value=${index}>
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
    });

    return characterTemplate;
};

export { charactersContainerTemplate };
