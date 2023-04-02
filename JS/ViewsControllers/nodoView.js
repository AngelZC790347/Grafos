/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import Nodo from '../nodo';

class NodoView {
    drawNodo(nodo) {
        let updateRoads = nodo.updateRoads.bind(nodo);
        const secNodo = document.getElementById('nodo-sec');
        secNodo.innerHTML += `<div class="nodo" id="node-${nodo.valor}">${nodo.valor}</div>`;
        const nuevoNodeElement = document.getElementById(`node-${nodo.valor}`);
        document.body.append(nuevoNodeElement);
        nuevoNodeElement.style.left = "0px";
        nuevoNodeElement.style.top = "0px";
        nuevoNodeElement.style.backgroundColor = nodo.highlighted ? "red" : "yellow";
        nuevoNodeElement.onmousedown = function (event) {
            nuevoNodeElement.style.position = 'absolute';
            nuevoNodeElement.style.zIndex = 1000;
            function moveNode(pageX, pageY) {
                nuevoNodeElement.style.left = pageX - nuevoNodeElement.offsetWidth / 2 + 'px';
                nuevoNodeElement.style.top = pageY - nuevoNodeElement.offsetHeight / 2 + 'px';
            }
            moveNode(event.pageX, event.pageY);
            function moverElemento(event) {
                moveNode(event.pageX, event.pageY);
                updateRoads();
            }
            document.addEventListener('mousemove', moverElemento);
            nuevoNodeElement.onmouseup = function () {
                document.removeEventListener('mousemove', moverElemento);
                updateRoads();
                nuevoNodeElement.onmouseup = null;
            };
        }
        nuevoNodeElement.ondragstart = function () {
            return false;
        };
        return nuevoNodeElement;
    }

}

