# Data Lovers

## Índice

* [1. Descripción del producto  digital](#1-descripción-del-producto_digital)
 - Análisis UX
* [2. Objetivos de la página](#2-objetivos-de-la-página)
* [3. Historias de usuario](#3-historias-de-usuario)
- HISTORIA DEL USUARIO 1 (H.U.1)
- HISTORIA DEL USUARIO 2 (H.U.2)
- HISTORIA DEL USUARIO 3 (H.U.3)
- HISTORIA DEL USUARIO 4 (H.U.4)
* [4. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Descripción del producto digital 👩‍💻💻

## Análisis UX: ✏️
Es una página web que permite al usuario (novatos y experimentados), mostrar todos los pokemones, filtrar y ordenar la lista de **Pokemon** para seleccionar uno en específico  o por ligas, habilidades especiales y ver sus estadísticas generales (more stats) y principales (ataque, defensa), ello con el objetivo de tener una mayor información de cual usar para combatir una lucha **Pokemón**.
[Planning 👉Trello](https://trello.com/b/GhE9iODV/proyectolaboratoriadatalovers)

`¿Quienes son los principales usuarios del producto?`
<br>
Todos aquellos a los cuales les guste el juego de Pokemon, no hay una población en edades referenciales, dado que a cualquier
edad uno puede gustarle ello.

`¿Cuáles son los objetivos de estos usuarios en relación con el producto?`
<br>
El objetivo de estos jugadores es poder conocer las caracteristicas especiales de cada pokemón que lo ayudará o sera escencial 
para una determinada competencia (De los 200 pokemones del juego), saber sus evoluciones de los mismos y así luchar y ganar en el campo de batalla.

`¿Cuáles son los datos mas importantes que quieren ver en la interfaz y por qué?`
<br>
* Poder ver a los Pokemones por imagen y ver sus carcateristicas y habilidadess principales<br>
* Una barra de navegación para filtrar y ordenar la vista de la lista de los pokemones.<br>
* Información estadística de los pokemones, tales como su ataque, defensa, armadura,poder de habilidad, entre otros. <br>
* Un promedio de las estadísticas por rol para que el usuario pueda identificar las fortalezas y debilidades de cada tipo. <br>

`¿Cuáles son los objetivos de estos usuarios en relación con el producto?`
<br>
Su objetivo es tener la información mas completa de los pokemones y sus carcateristicas para jugar y ganar la competencia.

`¿Cuándo utilizan o utilizarían el producto?`
<br>
A la hora de planear una estrategia de juego, para conocer mejor a su campeón y poder acceder a los datos de sus caracteristicas (competidor enemigos). Los usuarios suelen buscar las estadisticas del equipo enemigo para desarrollar de esa manera la estrategia adecuada.


## 2. Objetivos de la página 🎯

Visualizar la data,filtrarla, ordenarla y hacer algún cálculo agregado(Con cálculo agregado) nos referimos a distintos cálculos que puedes hacer con la data para mostrar información aún más relevante para los usuarios (promedio, el valor máximo o mínimo, etc).

## 3. Historias de usuario 👨‍🦱👩‍🦰💻

Las historias de usuario se trabajaron con la herramienta trello en el siguiente [link](https://docs.google.com/spreadsheets/d/1GsK5vld-C2ez0haIdeOaHLzAGcNznEmK/edit#gid=1442775653) donde se puede visualizar 4 historias de usuario que donde cada una consiste con criterios de aceptación, definición de terminado y pequeñas tareas en las cuales fueron subdivididas.

***************************************
```js
HISTORIA DEL USUARIO 1 (H.U.1): 
```

**HU1**: Pantalla de inicio : COMO jugador@ de **Pokemon** DESEO ingresar mi nombre, PARA sentir la experiencia más personalizada y luego poder visualizar a los Pokemones.

**Criterios de aceptación:** 💡
<br>
-Que el usuario visualice una pantalla de inicio.<br>
-Que el usuario pueda ingresar su nombre en un campo (input).<br>
-Que el usuario pueda darle click a un botón que lo dirija a una siguiente pagina donde vera un listado de los 200 pokemones.

**Definición de terminado:** ✔ 
<br>
-Pagina responsive .<br>
-Usar eslint para evaluación de código en Js (correcciones de sintaxis).<br>
-Subir a github <br>

**Testing con usuarios** :

1. Resaltaron que querian que fuera más personalizado (por lo que hicimos un input de 'ingrese su nombre') 
2. Resaltaron que el botón **Enter** sea mas grande y no tenga un fondo transparente.
3. El testing de la primera historia fue aprobada por los usuarios.

## Prototipado BAJA FIDELIDAD 
[MIRA EL 👉 FIGMA]
<br>

![p1](https://user-images.githubusercontent.com/60514118/109513930-93892b00-7a73-11eb-8d25-afb01dc180cf.JPG)

![Portada](https://user-images.githubusercontent.com/60514118/109263223-e68f8380-77d0-11eb-97a8-804a3bd89424.JPG)

## Prototipado ALTA FIDELIDAD 
![hu1](https://user-images.githubusercontent.com/60514118/109509772-3f7c4780-7a6f-11eb-9422-cc011b07813c.JPG)

**********************************
```js
HISTORIA DEL USUARIO 2 (H.U.2): 
```

**HU2**: Visualizar los pokemones por tipo,la lista de pokemones para verlos por orden alfabetico y al reverso (Z -> A), en geneal y tambien por tipo, ordenarlos por nivel de combate, 

**Criterios de aceptación:** 💡
<br>

 - Como usuario quiero que se muestren los atributos como (ataque, defensa, histamina) para saber qué tan fuerte es mi pokemón.<br>
 - Como jugador@ quiero ordenar a los pokemones por CP para saber cuales son los pokemones más fuertes.<br>

**Definición de terminado:** ✔ 
<br>
-Hacer responsive la página.<br>
-Hacerle testing al resultado (Pruebas unitarias).<br>
-Usar lint para evaluación de código (correcciones de sintaxis).<br>
-Subir a github.<br>
-Desplejar en Github pages.<br>

## Prototipado BAJA FIDELIDAD 
![HU2](https://user-images.githubusercontent.com/60514118/109264497-13dd3100-77d3-11eb-84f4-842bd516a5c4.JPG)

## Prototipado ALTA FIDELIDAD 
![HU2](https://user-images.githubusercontent.com/60514118/109511441-06dd6d80-7a71-11eb-9e37-c2f29c560b2d.JPG)


**********************************
```js
HISTORIA DEL USUARIO 3 (H.U.3): 
```
**HU3**: Como jugador@ de **Pokemon** deseo saber la cantidad de caramelos le faltan a mi **Pokemon** para que evolucione.

**Criterios de aceptación:** 💡
<br>
 - Como usuario quiero que se muestren los caramelos para identificar cuanto me falta para evolucionar mi pokemon.<br>
 - Mostrar la imagen de la siguiente evolución (Si existe) y la previa evolución (Si existe), de mi Pokemon.<br>

**Definición de terminado:** ✔ 
<br>
-Hacer una pantalla modal para mostrar la cantidad de caramelos y las evoluciones.<br>
-Hacerle testing al resultado (Pruebas unitarias).<br>
-Usar lint para evaluación de código (correcciones de sintaxis).<br>
-Subir a github.<br>
-Desplejar en Github pages.<br>

## Prototipado BAJA FIDELIDAD 
![baja](https://user-images.githubusercontent.com/60514118/109512994-aa7b4d80-7a72-11eb-85c9-145d67cfc1d1.JPG)

## Prototipado ALTA FIDELIDAD 
![modal](https://user-images.githubusercontent.com/60514118/109512756-6d16c000-7a72-11eb-9c3b-14466129f76e.JPG)

**********************************
```js
HISTORIA DEL USUARIO 4 (H.U.4): 
```
**HU2**: Como jugador@ de **Pokemon** quiero conocer el Top 10 de mis **Pokemones** segun **spawn-chance**.

**Criterios de aceptación:** 💡
<br>
 - Como jugador@ de Pokemon deseo saber cuáles son los 10 mejores Pokemon con los cuales debo luchar para alcanzar la victoria.<br>

**Definición de terminado:** ✔ 
<br>
-Hacer un botón que me indique ello, además mostrar por la pantalla cuáles son dichos Pokemon que cumplen con los estándares impuestos<br>
-Hacerle testing al resultado (Pruebas unitarias).<br>
-Usar lint para evaluación de código (correcciones de sintaxis).<br>
-Subir a github.<br>
-Desplejar en Github pages.<br>

## Prototipado BAJA FIDELIDAD 
![HU2](https://user-images.githubusercontent.com/60514118/109264497-13dd3100-77d3-11eb-84f4-842bd516a5c4.JPG)

## Prototipado ALTA FIDELIDAD 
![10alta](https://user-images.githubusercontent.com/60514118/109513483-283f5900-7a73-11eb-951e-ed014264bb2d.JPG)

## 4. Objetivos de aprendizaje 

El objetivo principal de este proyecto es que aprendas a diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el usuario necesita.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [ ] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [ ] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [ ] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [ ] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [ ] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [ ] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [ ] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 5. Criterios de aceptación mínimos del proyecto 👩‍💻👨‍💻

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Hacker edition 👩‍💻👨‍💻

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 7. Consideraciones técnicas 👩‍💻👨‍💻

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  |  └── athletes
|  |     ├── athletes.js
|  |     └── athletes.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/pokemon/pokemon.js';
```

La línea quedaría así:

```js
import data from './data/pokemon/pokemon.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias 👩‍💻👨‍💻

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo 

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist 👩‍💻👨‍💻

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.





