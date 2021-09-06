let areas =["Ingles","Ap dev", "Web dev", "matematicas", "HBA","Otra materia"];
let modulos = [1,2,3]


// Aqui estamos  estamos poniendo limites a la generacion aleatoria de nuemros en este caso del 1 - 3



let materiasAleatorias = areas[Math.floor(Math.random() * areas.length)]
let modulo = modulos[Math.floor(Math.random() * modulos.length)]



let array2 =  materiasAleatorias.concat(areas)
console.log(array2)

console.log(materiasAleatorias)

 for (materia in materiasAleatorias) {
    console.log(materiasAleatorias + "---" + modulo)
} 
