export class Road{
    constructor(tamaño,initID,finalID){
        this.initNode = document.getElementById(initID);
        this.finalNode = document.getElementById(finalID);
        this.tamaño=tamaño;
        this.recorrido=false;
        this.roadId =`roadFrom${initID}To${finalID}`;
        if (this.initNode==null || this.finalNode==null) {
            throw "Any of Node does not exist";
        }else{
            let roadElement = document.getElementById('root-svg');
            this.lineElement=document.createElementNS("http://www.w3.org/2000/svg", "line");
            this.lineElement.id=`${this.initNode.innerHTML} ${this.finalNode.innerHTML}`;
            this.textElement=document.createElementNS("http://www.w3.org/2000/svg","text");
            this.lineElement.innerHTML=this.tamaño;
            this.textElement.innerHTML=this.tamaño;
            this.textElement.id=`${this.tamaño} ${initID} ${finalID}`;
            this.lineElement.style="stroke:rgb(250, 250, 250);stroke-width:2";
            roadElement.append(this.textElement);
            roadElement.append(this.lineElement);
            this.drawLine();
        }
    }
    drawLine(){
        this.lineElement.setAttribute("x1",this.initNode.offsetLeft+this.initNode.offsetWidth/2);
        this.lineElement.setAttribute("y1",this.initNode.offsetTop+this.initNode.offsetHeight/2);
        this.lineElement.setAttribute("x2",this.finalNode.offsetLeft+this.finalNode.offsetWidth/2);
        this.lineElement.setAttribute("y2",this.finalNode.offsetTop+this.finalNode.offsetHeight/2);
        let posXFromTextElemenmt =(parseFloat(this.lineElement.getAttribute("x1"))+parseFloat(this.lineElement.getAttribute("x2")))/2;
        let posYFromTextElemenmt =(parseFloat(this.lineElement.getAttribute("y1"))+parseFloat(this.lineElement.getAttribute("y2")))/2;
        this.textElement.setAttribute("x",posXFromTextElemenmt);
        this.textElement.setAttribute("y",posYFromTextElemenmt);
        this.textElement.setAttribute("fill","rgb(211, 209, 209)");
        // let angulodeRotacion = Math.atan2(parseFloat(this.lineElement.getAttribute("y2"))-parseFloat(this.lineElement.getAttribute("y1")),parseFloat(this.lineElement.getAttribute("x2"))-parseFloat(this.lineElement.getAttribute("x1"))); 
    }
    getDomDistanceFromTwoNodes(){

    }
}
