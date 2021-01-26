//  Declara las variables
 let pronoun = ['the','our','my','your'];
 let adj = ['good','great', 'big','small','short'];
 let noun = ['jogger','racoon','count','finance','phone','water'];
 let domain = ['.io','.com','.net','.ve','.co'];
// bucle for, inicia con cada variable de la posición cero a la longitud de la lista y va iterando +1
// se imprime en cada iteració el resultado concatenando cada elemento en la posición correspondiente
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < domain.length; l++) {
                console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
            }
        }
    }
}