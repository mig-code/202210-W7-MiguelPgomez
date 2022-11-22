# Week 7 - Challenge

Deploy : https://202210-w7-miguelpgomez.netlify.app/

# GoT DOM

Tendrás que programar un interfaz de usuario para que refleje el siguiente modelo de datos.

En Juego de Tronos existen personajes. Todos esos personajes tienen la siguiente información: · Nombre · Familia a la que pertenece · Edad · Estado (vivo o muerto, aunque inicialmente todos están vivos)

Todos los personajes pueden realizar la acción de comunicar, pero cada tipo de personaje (no cada personaje) se comunica de un modo distinto. ❌Nota: este método devuelve el string con la frase, no imprime por consola.

✔️ Todos los personajes pueden realizar la acción de morir, cambiándose su estado a muerto.

✔️ Todos los personajes pertenecen a la misma serie, "Juego de Tronos".

✔️ Cada uno de esos personajes puede ser un rey, un luchador, un asesor, o un escudero.

✔️ Un rey, además de la información que tiene por ser personaje, tiene la siguiente información: · Años de reinado · Cuando se comunica dice: "Vais a morir todos"

✔️ Un luchador, además de la información que tiene por ser personaje, tiene la siguiente información: · Arma que usa · Destreza (un valor entre 0 y 10) · Cuando se comunica dice: "Primero pego y luego pregunto"

✔️ Un asesor, además de la información que tiene por ser personaje, tiene la siguiente información: · Personaje al que asesora (que puede ser rey, luchador, asesor o escudero) · Cuando se comunica dice: "No sé por qué, pero creo que voy a morir pronto"

✔️ Un escudero, además de la información que tiene por ser personaje, tiene la siguiente información: · Personaje al que sirve (que sólo puede ser luchador) · Grado de pelotismo (un valor entre 0 y 10) · Cuando se comunica dice: "Soy un loser"

0. Crea los siguientes archivos JS y haz que funcionen como módulos mediante import y export:

-   ✔️ Personaje.js, Rey.js, Luchador.js, Asesor.js, Escudero.js (mete dentro cada clase)
-   ✔️personajes.js (crea dentro un array con los personajes
    -   Joffrey Baratheon (rey),
    -   Jaime Lannister (luchador),
    -   Daenerys Targaryen (luchadora),
    -   Tyrion Lannister (asesor de Daenerys) y
    -   Bronn (escudero de Jaime).)
-   ✔️ index.js (aquí va todo el resto del enunciado, y éste será el punto de entrada)

1. ✔️Haz que por cada personaje del array se muestre la ficha correspondiente en el navegador:
   ✔️ En el elemento con clase `emoji` tiene que aparecer uno de estos emojis dependiendo del tipo de personaje: 👑 🗡 🎓 🛡
   ✔️ Si el personaje está muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
   ✔️ En la lista con clase `metadata`, haz que sólo aparezcan los `li` correspondientes al personaje.
2. ✔️ Cuando el usuario haga clic en el botón "muere", tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio.
3. ✔️ Cuando el usuario haga clic en el botón "habla", el elemento con clase `comunicaciones` debe aparecer con el texto y la imagen correspondientes.
   ✔️ Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.
