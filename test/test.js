import {Nodo } from '../JS/nodo';
import {Road} from '../JS/road';
import {alKruskal} from '../JS/algoritmos'
let arrayuOfNodes=[];
const CANTNODOS=20;
document.addEventListener('DOMContentLoaded',()=>{
    setUpSvg();
    testNodes();
    testRoads();
    testRoadsByNode();
    alKruskal(arrayuOfNodes);
    // testeAnimation();
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

function  testRoads() {
    for (let index = 0; index < arrayuOfNodes.length; index++) {
        if (index === arrayuOfNodes.length-1) {
            let road1 = new Road(Math.round((Math.random()*100)+1),`node-${arrayuOfNodes[index].valor}`,`node-${arrayuOfNodes[0].valor}`);
            arrayuOfNodes[index].roads.push(road1);
            arrayuOfNodes[0].roads.push(road1);
        }else{
            let road1 = new Road(Math.round((Math.random()*100)+1),`node-${arrayuOfNodes[index].valor}`,`node-${arrayuOfNodes[index+1].valor}`);
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
function testeAnimation() {
    arrayuOfNodes[CANTNODOS-1].roads[0].setLineAnimation();
}