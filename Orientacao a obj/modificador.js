function fnCapitalizarobj(colecao,atributo,vetor){  
    if(colecao){
        var resultado = colecao.map(function(obj){

            var letraInicial = obj[atributo].charAt(0).toUpperCase(); 
            var restoTexto = obj[atributo].slice(1); 

            obj[atributo] = letraInicial + restoTexto;
        
         return obj;
            
        });
        console.log('resultado',resultado);
       
    }else{
        var modificado = [];
        var resutlVetor = vetor.map(function(stg){
            var letraInicial = stg.charAt(0).toUpperCase(); 
            var restoTexto = stg.slice(1); 
            var resultado = letraInicial + restoTexto;
        
            modificado[stg] = resultado;
            
        });
        return modificado;

    }
}


function fnCapitalizar(vetor){
    //console.log('vetorrr',vetor);
    var modificado = [];
    for(var i = 0; i <vetor.length; i++){
        var letraInicial = vetor[i].charAt(0).toUpperCase(); 
        var restoTexto = vetor[i].slice(1); 
        var resultado = letraInicial + restoTexto;
    
        modificado[i] = resultado;
    }
    //console.log('modificado',modificado);

    return modificado;
    

}

function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });

}

function fnCaixaAlta(vetor){
    var modificado = [];
    for(var i = 0; i <vetor.length; i++){

        modificado[i] = vetor[i].toUpperCase(); 
    
    }

    return modificado;
}

export default {
    capitalizarobj:fnCapitalizarobj,
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};