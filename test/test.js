import {Nodo , addNodo} from '../JS/nodo';
import {Road} from '../JS/road';
document.addEventListener('DOMContentLoaded',()=>{
    let nodo11 = new Nodo(11);
    let nodo12 = new Nodo(12);
    let road1 = new Road(500,`node-${nodo11.valor}`,`node-${nodo12.valor}`);
    console.log(JSON.stringify(nodo11));
    console.log(nodo12.roads);
    // linea1Element.setAttribute("x1",nodo11.nodoHtmlElement.offsetLeft);
    // linea1Element.setAttribute( "y1",nodo11.nodoHtmlElement.offsetTop);
    // linea1Element.setAttribute( "x2",nodo12.nodoHtmlElement.offsetTop);
    // linea1Element.setAttribute( "y2",nodo12.nodoHtmlElement.offsetTop);
});