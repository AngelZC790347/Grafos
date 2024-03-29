function alDijkstra(initNode,nodes,roads){
    let sol = []
    function allNodesHighLithed() {
        // console.log([...nodes.values()])
        return [...nodes.values()].every(node=>!node.highlighted)
    }
    console.log(!allNodesHighLithed())
    while (!allNodesHighLithed()){
        let min = 1000000
        let minVal = {}
        for (var i = 0; i < initNode.roads.length; i++) {
            let currentRoad= initNode.roads[i];
            console.log(currentRoad.tamaño);
            if(currentRoad.tamaño < min){
                min = currentRoad.tamaño
                minVal.origin = (currentRoad.initNode !== initNode ?currentRoad.initNode : currentRoad.finalNode)
                minVal.weight = min                
            }
            console.log(minVal)
        }
        console.log(minVal)
        minVal.origin.highlighted = true
        sol.push(minVal);
    }
    console.log(sol)        
}

async function alKruskal(nodes,roads){    
    roads.sort((road1,road2)=>road2.tamaño - road1.tamaño)
    let solution = []
    for (var i = roads.length - 1; i >= 0; i--) {
        let min = roads.pop()    
        // console.log(min,roads)
        if (!verifyCycle(min.initNode,min.finalNode,solution)) {
            await min.setLineAnimation("rgb(250, 250, 250)","red") 
            solution.push(min)
        }else{
            min.lineElement.setAttribute("display","none");
            min.textElement.setAttribute("display","none");
        }
    }
    
}   


function verifyCycle(origin , destinity , tmpSolution) {
    // body...    
    let encontrado = false
    let tmpRoads = tmpSolution.filter(road=>road.initNode === origin || road.finalNode === origin)
    // console.log(tmpRoads)
    for (var i = tmpRoads.length - 1; i >= 0; i--) {
        let otherChild = tmpRoads[i].initNode !== origin ? tmpRoads[i].initNode:tmpRoads[i].finalNode
        let newroads = tmpSolution.filter(road=>road !==tmpRoads[i])
        if (otherChild === destinity || verifyCycle(otherChild,destinity,newroads)){
            encontrado = true
            break
        }
    }
    return encontrado

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

function alPrim(){
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