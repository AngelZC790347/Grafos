// import {Nodo } from '../JS/nodo';
// import {Road} from '../JS/road';
// import {alKruskal} from './algoritmos'
let nodes = new Map();
let roads = []
document.addEventListener('DOMContentLoaded',()=>{
    setUpSvg()
    document.getElementById('in-but-add-nodo').addEventListener('click',addNodo);
    document.getElementById('in-but-add-road').addEventListener('click',addRoad);
    document.getElementById('button-kruskal').addEventListener('click',()=>{alKruskal(nodes,[...roads])});
});

function setUpSvg(){
    let roadElement=document.createElementNS("http://www.w3.org/2000/svg", "svg");
    roadElement.setAttribute("height",`${document.body.offsetHeight}`);
    roadElement.setAttribute("width",`${document.body.offsetWidth}`);
    roadElement.id="root-svg";
    document.body.append(roadElement);
}

export function addNodo() {
    const fieldNodoValue =document.getElementById('in-number-nodo').value;
    if (fieldNodoValue === "" || fieldNodoValue ==null ) {
        alert( "the field Letter must be writted");        
    }else if (nodes.get(fieldNodoValue) !== undefined){
        alert("the node already been exist");
    }else{
        let nodo = new Nodo(fieldNodoValue);
        nodes.set(fieldNodoValue,nodo);      
    }  
} 
function addRoad(){
    let fieldNodeStart=document.getElementById('node-start').value
    let fieldNodeFinal=document.getElementById('node-final').value
    let tamañoRoadField= document.getElementById('tam-road').value
    if(fieldNodeStart ==="" || fieldNodeFinal ==="" || tamañoRoadField === "" || nodes.get(fieldNodeStart) === undefined || nodes.get(fieldNodeFinal) === undefined){
        alert("Any of field not be valid")
    }else{
        try{                        
            let nodeStart = nodes.get(fieldNodeStart) 
            let nodeFinal = nodes.get(fieldNodeFinal)
            console.log(nodeStart,nodeFinal);
            let road1=new Road(parseInt(tamañoRoadField),nodeStart,nodeFinal);
            roads.push(road1);
        }catch(error){
            alert(error);
        }
    }
}
