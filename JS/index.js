import {Nodo } from '../JS/nodo';
import {Road} from '../JS/road';
import {alKruskal} from './algoritmos'
let arrayuOfNodes=[];
document.addEventListener('DOMContentLoaded',()=>{
    setUpSvg();
    const addNodoButton = document.getElementById('in-but-add-nodo'); 
    addNodoButton.addEventListener('click',addNodo);
    const addRoadButton = document.getElementById('in-but-add-road');
    addRoadButton.addEventListener('click',addRoad);
    const kruskalButton = document.getElementById('button-kruskal');
    kruskalButton.addEventListener('click',()=>{alKruskal(arrayuOfNodes)});
});
export function addNodo() {
    const fieldNodoValue =document.getElementById('in-number-nodo').value;
    let existe = nodeExist(fieldNodoValue);
    console.log(existe);
    if (fieldNodoValue === "" || fieldNodoValue ==null ) {
        console.error( "the field value must be writted");        
    }else if (existe){
        console.error("the node already been exist");
    }else{
        let nodo = new Nodo(fieldNodoValue);
        arrayuOfNodes.push(nodo);
    }  
} 
function setUpSvg(){
    let roadElement=document.createElementNS("http://www.w3.org/2000/svg", "svg");
    roadElement.setAttribute("height",`${document.body.offsetHeight}`);
    roadElement.setAttribute("width",`${document.body.offsetWidth}`);
    roadElement.id="root-svg";
    document.body.append(roadElement);
}

function nodeExist(value){
    let exist = false;
    value = parseInt(value);
    for (let index = 0; index < arrayuOfNodes.length; index++) {
        const element = arrayuOfNodes[index];
        console.log(element.valor);
        console.log(value);
        if (element.valor == value) {
            exist = true;
        }
    }
    return exist;
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
export default function addRoad(){
    let fieldNodeStart=document.getElementById('node-start').value;
    let fieldNodeFinal=document.getElementById('node-final').value;
    let tamañoRoadField= document.getElementById('tam-road').value;
    if (fieldNodeStart!=="" && fieldNodeFinal !=="" && tamañoRoadField !== "") {
        try{
            let idNodeStart=`node-${fieldNodeStart}`;
            let idNodeFinal =`node-${fieldNodeFinal}`;
            let road1=new Road(tamañoRoadField,idNodeStart,idNodeFinal);
            let nodeStart=findNodoByID(parseInt(fieldNodeStart)); 
            let nodeFinal=findNodoByID(parseInt(fieldNodeFinal));
            nodeStart.roads.push(road1);
            nodeFinal.roads.push(road1);
        }catch(error){
            console.error(error);
        }
    }else{
        console.error('all fields must be writted');
    }
}
