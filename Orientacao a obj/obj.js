import modificador from './modificadorex.js';
import ingredientes from './ingredientes.js';

//var strings = ['mel', 'água', 'sal', 'mostarda'];

let ingredientesOrdenados = modificador.ordenar(ingredientes,'nome'); // -> ingredientes é passado como 'colecao', e nome como 'atributo' no modificador.
let ingredientesCapitalizados = modificador.capitalizar(ingredientes,'nome');
let containerIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingredientesCapitalizados){
    let textoHTML = `
        <div class="ingredientes">
            <img src="img/${ingrediente.img}"/>
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `;

    containerIngredientes.innerHTML += textoHTML;

}


