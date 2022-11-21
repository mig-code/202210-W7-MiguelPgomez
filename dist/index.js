import { personajes } from './scripts/personajes.js';
(() => {
    console.log('Hello World');
    document.addEventListener('DOMContentLoaded', () => {
        //  const templates = [headerTemplate, footerTemplate];
        const characterTemplate = `
         <li class="character col">
            <div class="card character__card">
                        <img
                            src="img/no-one.jpg"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                Nombre y familia
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: X años</li>
                                    <li>
                                        Estado:
                                        <i class="fas fa-thumbs-down"></i>
                                        <i class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                    <li>Años de reinado: X</li>
                                    <li>Arma: XXX</li>
                                    <li>Destreza: X</li>
                                    <li>Peloteo: X</li>
                                    <li>Asesora a: X</li>
                                    <li>Sirve a: X</li>
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
                        <i class="emoji"></i>
                    </div>
                 </li>`;
        const renderedHtmlString = `<ul class="characters-list row list-unstyled">
               
                   ${personajes.map(() => characterTemplate).join('')}
               
            </ul>
       `;
        // RENDER HTML
        const slots = document.querySelector('slot');
        if (!slots)
            return;
        slots.outerHTML = renderedHtmlString;
    });
})();
