
export function alDijkstra(){

}
export function alKruskal(arrayuOfNodes){
    let roadasSolution=[]
    let terminado = false;
    let roadsElements = document.getElementsByTagName('line'); 
    while (!terminado) {
        if (roadasSolution.length >=arrayuOfNodes.length-1) {
            break;
        }
        let element=getTheMinRoad(roadsElements);
        let idElement=element.id.split(' ');
        roadasSolution.push(element);
        let idNodes = idElement.map(el=>{
            return parseInt(el);
        });
        let currentNodes=idNodes.map(e=>findNodoByID(e,arrayuOfNodes));
        console.log(currentNodes);  
        console.log(arrayuOfNodes.length,roadasSolution.length);
        if(verifyAllNodos(arrayuOfNodes)  && roadasSolution.length === arrayuOfNodes.length-1){ 
            terminado = true;
            break;
        }else{
            currentNodes[0].highlighted=true;
            currentNodes[1].highlighted=true;
        } 
    }
    for (const iterator of roadsElements) {
        console.log(iterator);
        iterator.remove();
    }
    roadasSolution.forEach(element => {
        console.log(element.id);
    });
}
export  function alPrim(){

}
function verifyAllNodos(arrayuOfNodes) {
    let completed =true ;
    arrayuOfNodes.map(e=>{
        if (!e.highlighted) {
            completed= false
        }
    });
    return completed;
}
function getTheMinRoad(htmlColection){
    let minimun ;
    let indiceMenor;
    let i = 0;
    minimun = htmlColection['0'];
    for (const iterator of htmlColection) {
        let number = parseFloat(iterator.innerHTML);
        if (number < parseFloat(minimun.innerHTML)){
            indiceMenor = i;
            minimun  = iterator;
        }
        i++;
    }
    console.log(htmlColection.item(indiceMenor));
    htmlColection.item(indiceMenor).remove();
    return minimun;
}

function findNodoByID(id,arrayuOfNodes){
    let element;
    arrayuOfNodes.map((el)=>{
        if (el.valor == id) {
            element = el;
        }
    });
    return element;
}

function findNumberInArray(number,array){
    let encontrado = false
    array.map(el=>{
        if (el == number) {
            console.log('encontrado', el);
            encontrado = true;
        }
    })
    return encontrado;
}