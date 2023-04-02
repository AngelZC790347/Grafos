class Nodo{
    constructor(valor){
            this.roads=[]; 
            this.valor = valor;
            this.highlighted = false;
            this.nodoHtmlElement=this.drawNodo();              
    }
    updateRoads(){
        this.roads.map(el=>{
            el.drawLine();
        });
    }
    hasRoadTo(destinity,previousRoad = null){
        console.log(this,destinity,previousRoad)
        let encontrado = false
        let roadsTmp = this.roads.filter(road => road !== previousRoad)
        console.log(roadsTmp)
        for (var i = 0; i < roadsTmp.length; i++) {
            let road= roadsTmp[i]
            let otherChild = this!=road.initNode?road.initNode:road.finalNode
            if (otherChild === destinity || otherChild.hasRoadTo(destinity,road)){ 
                encontrado = true
                break
            }
        }        
        return encontrado
    }
    drawNodo(){
        let updateRoads=this.updateRoads.bind(this);
        const secNodo = document.getElementById('nodo-sec');
            secNodo.innerHTML+=`<div class="nodo" id="node-${this.valor}">${this.valor}</div>`;  
            const nuevoNodeElement = document.getElementById(`node-${this.valor}`);
            document.body.append(nuevoNodeElement);
            nuevoNodeElement.style.left=Math.round(Math.random()*1000);
            nuevoNodeElement.style.top=Math.round(Math.random()*500);
            nuevoNodeElement.style.backgroundColor = this.highlighted? "red":"yellow";
            nuevoNodeElement.onmousedown=function(event){
                nuevoNodeElement.style.position = 'absolute';
                nuevoNodeElement.style.zIndex = 1000;
                function moveNode(pageX,pageY){
                    nuevoNodeElement.style.left=pageX-nuevoNodeElement.offsetWidth/2 + 'px';
                    nuevoNodeElement.style.top= pageY-nuevoNodeElement.offsetHeight/2 + 'px';
                }
                moveNode(event.pageX,event.pageY);
                function moverElemento(event) {
                    moveNode(event.pageX,event.pageY);
                    updateRoads();
                }
                document.addEventListener('mousemove',moverElemento);  
                nuevoNodeElement.onmouseup = function() {
                    document.removeEventListener('mousemove', moverElemento);
                    updateRoads();
                    nuevoNodeElement.onmouseup = null;
                  };          
            }
            nuevoNodeElement.ondragstart = function() {
                return false;
            };
            return nuevoNodeElement;  
    }
    getTheMostShortestRoad(){
        let minimun;
        this.roads.map((el,i)=>{
            if (i===0) {
                minimun = el;
            }
            minimun = el.tamaño<minimun.tamaño?el:minimun;
        })
        return minimun;
    }
   
}