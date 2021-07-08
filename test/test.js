import {Nodo } from '../JS/nodo';
import {Road} from '../JS/road';
let arrayuOfNodes=[];
const CANTNODOS=20;
document.addEventListener('DOMContentLoaded',()=>{
    setUpSvg();
    testNodes();
    testRoads();
    testRoadsByNode();
});
function setUpSvg(){
    let roadElement=document.createElementNS("http://www.w3.org/2000/svg", "svg");
    roadElement.setAttribute("height",`${document.body.offsetHeight}`);
    roadElement.setAttribute("width",`${document.body.offsetWidth}`);
    roadElement.id="root-svg";
    document.body.append(roadElement);
}

function testRoadsByNode() {
    arrayuOfNodes.map(el=>{
        el.getTheMostShortestRoad();
    })
}

function findNodoByID(id){
    let element;
    arrayuOfNodes.map((el)=>{
        if (el.valor == id) {
            element = el;
        }
    });
    return element;
}
function  testRoads() {
    for (let index = 0; index < arrayuOfNodes.length; index++) {
        if (index === arrayuOfNodes.length-1) {
            let road1 = new Road(100,`node-${arrayuOfNodes[index].valor}`,`node-${arrayuOfNodes[0].valor}`);
            arrayuOfNodes[index].roads.push(road1);
            arrayuOfNodes[0].roads.push(road1);
        }else{
            let road1 = new Road(100,`node-${arrayuOfNodes[index].valor}`,`node-${arrayuOfNodes[index+1].valor}`);
            arrayuOfNodes[index].roads.push(road1);
            arrayuOfNodes[index+1].roads.push(road1);
        }  
    }
}
function testNodes() {
    for (let index = 0; index < CANTNODOS; index++) {
        arrayuOfNodes.push(new Nodo(index+1));
    }
}
