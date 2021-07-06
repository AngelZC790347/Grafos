import {addNodo} from './nodo';
import addRoad from './road';
document.addEventListener("DOMContentLoaded",function(){
    const addNodoButton = document.getElementById('in-but-add-nodo'); 
    addNodoButton.addEventListener('click',addNodo);
    const addRoadButton = document.getElementById('in-but-add-road');
    addRoadButton.addEventListener('click',addRoad);
});

