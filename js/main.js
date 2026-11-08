
//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
/*function sumEveryOther (...numeros){
    return numeros.reduce((acum, num) => acum + num, 0);
}
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26
*/
//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.
        
        function addOnlyNums (){
        }
        console.log(addOnlyNums(1, "perro", 2, 4)); //7

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs (){

};
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
        
//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
/*
function combineTwoArrays(){
    const array3 = [...array1, ...array2];
    console.log(array3);

};
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
combineTwoArrays(array1, array2); // [1, 2, 3, 4, 5, 6]
console.log(array3);
*/
//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
        /*
        function onlyUniques(){
            
        };

        console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']
        console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]
        */
//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
/*
function combineAllArrays(...arrays){
    return arrays.flat();
};

const combinar = combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combinar);
const combinar2 = combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
console.log(combinar2);
*/
//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare()

sumAndSquare(1, 2, 3); // 1^2 + 2^2 + 3^2 = 14
sumAndSquare(4, 5); // 4^2 + 5^2 = 41
sumAndSquare(1, 2, 3, 4); // 1^2 + 2^2 + 3^2 + 4^2 = 30
