import { Road } from "./road";
export let arrayuOfNodes=[];
export class Nodo{
    constructor(valor){
            this.roads=[]; 
            this.valor = parseInt(valor);
            let updateRoads=this.updateRoads.bind(this);
            const secNodo = document.getElementById('nodo-sec');
            secNodo.innerHTML+=`<div class="nodo" id="node-${this.valor}">${this.valor}</div>`   
            const nuevoNodeElement = document.getElementById(`node-${this.valor}`);
            document.body.append(nuevoNodeElement);
            nuevoNodeElement.onmousedown=function(event){
                nuevoNodeElement.style.position = 'absolute';
                nuevoNodeElement.style.zIndex = 1000;
                function moveNode(pageX,pageY){
                    nuevoNodeElement.style.left=pageX-nuevoNodeElement.offsetWidth/2 + 'px';
                    nuevoNodeElement.style.top= pageY-nuevoNodeElement.offsetHeight/2 + 'px';
                }
                updateRoads();
                moveNode(event.pageX,event.pageY);
                function moverElemento(event) {
                    moveNode(event.pageX,event.pageY);
                }
                document.addEventListener('mousemove',moverElemento);  
                nuevoNodeElement.onmouseup = function() {
                    document.removeEventListener('mousemove', moverElemento);
                    nuevoNodeElement.onmouseup = null;
                  };          
            }
            nuevoNodeElement.ondragstart = function() {
                return false;
            };  
            this.nodoHtmlElement=nuevoNodeElement;              
    }
    updateRoads(){
        this.roads.map(el=>{
            console.log(el);
            for (const key in el) {
               console.log(typeof(el[key]));
            }
        });
    }
}


export function addNodo() {
    const fieldNodoValue =document.getElementById('in-number-nodo').value;
    if (fieldNodoValue === "" || fieldNodoValue ==null ) {
        console.error( "the field value must be writted");        
        
    }else if (nodeExist(parseInt(fieldNodoValue))){
        console.error("the node already been exist");
    }else{
        let nodo = new Nodo(fieldNodoValue);
        arrayuOfNodes.push({fieldNodoValue:nodo});
    }  
} 


function nodeExist(value){
    let exist = false;
    arrayuOfNodes.forEach(element => {
        if(element.valor===value){
            exist = true;
        }
    });
    return exist;
}