import {Nodo } from '../JS/nodo';
import {Road} from '../JS/road';
import {alKruskal} from '../JS/algoritmos'
let nodes = new Map();
var roads = [];
const CANTNODOS=11;
document.addEventListener('DOMContentLoaded', ()=>{
    setUpSvg();
    testNodes();
   // testRoads();
//    testRoadsByNode();
     alKruskal(nodes,roads);
//    testeAnimation();
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
    for (var i = 0, max = CANTNODOS; i < max; i++) {
        let code = "A".charCodeAt(0) + i;
        console.log(code);
        let nodeChar = String.fromCharCode(code);
        console.log(nodeChar);
        let nodo1 = new Nodo(nodeChar);
        nodes.set(nodeChar,nodo1);               
        console.log(nodes)
    }
    nodes.forEach((val)=>{
        let randomNode = nodes.get(String.fromCharCode(Math.round(Math.random()*10) + "A".charCodeAt(0)));
        let randomNode2 = nodes.get(String.fromCharCode(Math.round(Math.random()*10) + "A".charCodeAt(0)));
        if (randomNode !== randomNode2){
            let newRoad = new Road(Math.round(Math.random()*100),randomNode,randomNode2);
            roads.push(newRoad)
        }        
    });
    // console.log(nodes.get("A").hasRoadTo(nodes.get("F")))
}
function testeAnimation() {
    arrayuOfNodes[CANTNODOS-1].roads[0].setLineAnimation();
}