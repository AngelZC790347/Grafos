
export function alDijkstra(){
    // Dijstra algoritmo
}

export function alKruskal(arrayuOfNodes){
    let tmpRoads=[];
    let roadsElements = document.getElementsByTagName('line'); 
    for (const iterator1 of roadsElements) {
        tmpRoads.push(iterator1);
    }
    for (let index = 0; index < arrayuOfNodes.length-1; index++) {
        let numebrsID=getTheMinRoad(tmpRoads).id;
        recolorLinesByID(numebrsID,"rgb(250, 250, 250)","rgb(255,0,0)",arrayuOfNodes);
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
    let currentID = `roadFromnode-${numebrs[0]}Tonode-${numebrs[1]}`      
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

function getTheMinRoad(arrayOfRoads){
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
    
    return minimun;
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