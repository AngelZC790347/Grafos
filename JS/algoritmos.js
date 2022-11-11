
export function alDijkstra(){
    // Dijstra algoritmo
}

export function alKruskal(arrayuOfNodes){
    console.log(arrayuOfNodes);
}

function recolorLinesByID(lineID,initColor,finalColor,arrayuOfNodes) {
    let numebrs=lineID.split(" ");
    console.log(numebrs[0]);
    let currentID = `roadFromnode-${numebrs[0]}Tonode-${numebrs[1]}`;     
    findNodoByID(numebrs[0],arrayuOfNodes).roads.map(el=>{
        console.log(el.roadId ,currentID);
        if (el.roadId === currentID) {
            console.log('es igual');
            el.setLineAnimation(initColor,finalColor);
        }
    });
}

export  function alPrim(){
    //algoritmos de Prin Animation
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

function getTheMinRoad(arrayOfRoads,arrayuOfNodes){
    let minimun ;
    let minIndex;
    minimun = arrayOfRoads[0];
    arrayOfRoads.map((element,i) => {
        if (parseFloat(element.innerHTML) <= parseFloat(minimun.innerHTML)) {
            console.log("es menor" + element.innerHTML);
            minimun =  element;
            minIndex = i;
        }
    });
    arrayOfRoads.splice(minIndex,1);
    let numbers=minimun.id.split(' ').map(el=>el);
    let node1 = findNodoByID(numbers[0],arrayuOfNodes);
    let node2 =findNodoByID(numbers[1],arrayuOfNodes);
    if (node1.highlighted && node2.highlighted) {
        recolorLinesByID(minimun.id,"rgb(250, 250, 250)","transparent",arrayuOfNodes)
        return null;
    }else{
    return minimun;
    }
}

function findNodoByID(id,arrayuOfNodes){
    let element;
    console.log(arrayuOfNodes);
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