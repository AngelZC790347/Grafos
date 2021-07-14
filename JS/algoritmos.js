
export function alDijkstra(){
    // Dijstra algoritmo
}

export function alKruskal(arrayuOfNodes){
    let tmpRoads=[]; //the roads that will be deleting;
    let index = 0;
    let terminado = false;
    let roadsElements = document.getElementsByTagName('line'); 
    for (const iterator1 of roadsElements) {
        tmpRoads.push(iterator1);
    }
    while (!terminado) {
        if (index >= arrayuOfNodes.length-2){
            terminado = true;
        }

        let element=getTheMinRoad(tmpRoads,arrayuOfNodes);// catch the minimun road It will nullable If it form a cicle road

        if (element === null){
            index = index;
        } else {
            recolorLinesByID(element.id,"rgb(250, 250, 250)","rgb(255,0,0)",arrayuOfNodes);   
            index++;
        }
    }
    tmpRoads.map(el=>{
        let numebrs=el.id.split(" ");
        const textID=`${el.innerHTML} node-${numebrs[0]} node-${numebrs[1]}`
        document.getElementById(textID).innerHTML="";
        recolorLinesByID(el.id,"rgb(250, 250, 250)", "transparent",arrayuOfNodes);
    }); 
}

function recolorLinesByID(lineID,initColor,finalColor,arrayuOfNodes) {
    let numebrs=lineID.split(" ");
    console.log(parseInt(numebrs[0]));
    let currentID = `roadFromnode-${numebrs[0]}Tonode-${numebrs[1]}`;     
    findNodoByID(parseInt(numebrs[0]),arrayuOfNodes).roads.map(el=>{
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
    let numbers=minimun.id.split(' ').map(el=>parseInt(el));
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