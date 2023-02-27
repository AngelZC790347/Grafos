const SVGLINK ="http://www.w3.org/2000/svg";
export class Road{
    constructor(tamaño,nodo1,nodo2){
        this.initNode = nodo1;
        this.finalNode = nodo2;
        console.log(nodo1, nodo2, this);
        this.initNode.roads.push(this);
        this.finalNode.roads.push(this);
        this.tamaño=tamaño;                
        this.recorrido=false;
        this.roadId =`roadFrom${`node-${nodo1.valor}`}To${`node-${nodo2.valor}`}`;
        if (this.initNode==null || this.finalNode==null) {
            throw "Any of Node does not exist";
        }else{
            this.setUpRoadsElements("rgb(250, 250, 250)",2);
            this.textElement.id=`${this.tamaño} node-${this.initNode.valor} node-${this.finalNode.valor}`;
            this.drawLine();
        }
    }
    drawLine(){
        this.lineElement.setAttribute("x1",this.initNode.nodoHtmlElement.offsetLeft+this.initNode.nodoHtmlElement.offsetWidth/2);
        this.lineElement.setAttribute("y1",this.initNode.nodoHtmlElement.offsetTop+this.initNode.nodoHtmlElement.offsetHeight/2);
        this.lineElement.setAttribute("x2",this.finalNode.nodoHtmlElement.offsetLeft+this.finalNode.nodoHtmlElement.offsetWidth/2);
        this.lineElement.setAttribute("y2",this.finalNode.nodoHtmlElement.offsetTop+this.finalNode.nodoHtmlElement.offsetHeight/2);
        let posXFromTextElemenmt =(parseFloat(this.lineElement.getAttribute("x1"))+parseFloat(this.lineElement.getAttribute("x2")))/2;
        let posYFromTextElemenmt =(parseFloat(this.lineElement.getAttribute("y1"))+parseFloat(this.lineElement.getAttribute("y2")))/2;
        this.textElement.setAttribute("x",posXFromTextElemenmt);
        this.textElement.setAttribute("y",posYFromTextElemenmt);
        this.textElement.setAttribute("fill","rgb(211, 209, 209)");
        // let angulodeRotacion = Math.atan2(parseFloat(this.lineElement.getAttribute("y2"))-parseFloat(this.lineElement.getAttribute("y1")),parseFloat(this.lineElement.getAttribute("x2"))-parseFloat(this.lineElement.getAttribute("x1"))); 
    }

    setUpRoadsElements(colorLine,widthLine){
        let roadElement = document.getElementById('root-svg');
        this.lineElement=document.createElementNS(SVGLINK, "line");
        this.lineElement.id=`${this.initNode.nodoHtmlElement.innerHTML} ${this.finalNode.nodoHtmlElement.innerHTML}`;
        this.textElement=document.createElementNS(SVGLINK,"text");
        this.lineElement.innerHTML=this.tamaño;
        this.textElement.innerHTML=this.tamaño;
        this.lineElement.style=`stroke:${colorLine};stroke-width:${widthLine}`;
        roadElement.append(this.textElement);
        roadElement.append(this.lineElement);
    }
    setLineAnimation(initColor,finalColor){
        this.lineElement.innerHTML+=`<animate attributeType="XML" attributeName="stroke" from=${initColor} to=${finalColor} dur="4s"">`;
        setTimeout(()=>{this.lineElement.style.stroke=finalColor; this.lineElement.innerHTML=this.tamaño},3500);
    }
}
