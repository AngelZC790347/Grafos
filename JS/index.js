import {Nodo } from '../JS/nodo';
import {Road} from '../JS/road';
import {alKruskal} from './algoritmos'
let arrayuOfNodes=[];
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('in-but-add-nodo').addEventListener('click',addNodo);
    document.getElementById('in-but-add-road').addEventListener('click',addRoad);
    document.getElementById('button-kruskal').addEventListener('click',()=>{alKruskal(arrayuOfNodes)});
});
export function addNodo() {
    const fieldNodoValue =document.getElementById('in-number-nodo').value;
    let existe = nodeExist(fieldNodoValue);
    if (fieldNodoValue === "" || fieldNodoValue ==null ) {
        alert( "the field Letter must be writted");        
    }else if (existe){
        alert("the node already been exist");
    }else{
        let nodo = new Nodo(fieldNodoValue);
        arrayuOfNodes.push(nodo);
    }  
} 
function nodeExist(value){
    let exist = false;
    arrayuOfNodes.forEach(element=>{
        exist = element.valor===value;
    });
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
function addRoad(){
    let fieldNodeStart=document.getElementById('node-start').value;
    let fieldNodeFinal=document.getElementById('node-final').value;
    let tamañoRoadField= document.getElementById('tam-road').value;
    if (fieldNodeStart!=="" && fieldNodeFinal !=="" && tamañoRoadField !== "") {
        try{
            let idNodeStart=`node-${fieldNodeStart}`;
            let idNodeFinal =`node-${fieldNodeFinal}`;
            let road1=new Road(tamañoRoadField,idNodeStart,idNodeFinal);
            let nodeStart=findNodoByID(fieldNodeStart); 
            let nodeFinal=findNodoByID(fieldNodeFinal);
            nodeStart.roads.push(road1);
            nodeFinal.roads.push(road1);
        }catch(error){
            alert(error);
        }
    }else{
        alert('all fields must be writted');
    }
}
