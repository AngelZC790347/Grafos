export class Road{
    constructor(tamaño,initID,finalID){
        this.initNode = document.getElementById(initID);
        this.finalNode = document.getElementById(finalID);
        this.roadId =`roadFrom${initID}To${finalID}`;
        if (this.initNode==null || this.finalNode==null) {
            throw "Any of Node does not exist";
        }else{
            let roadElement = document.getElementById('root-svg');
            this.lineElement=document.createElementNS("http://www.w3.org/2000/svg", "line");
            this.lineElement.style="stroke:rgb(250, 250, 250);stroke-width:2";
            roadElement.append(this.lineElement);
            this.drawLine();
        }
    }
    drawLine(){
        this.lineElement.setAttribute("x1",this.initNode.offsetLeft+this.initNode.offsetWidth/2);
        this.lineElement.setAttribute("y1",this.initNode.offsetTop+this.initNode.offsetHeight/2);
        this.lineElement.setAttribute("x2",this.finalNode.offsetLeft+this.finalNode.offsetWidth/2);
        this.lineElement.setAttribute("y2",this.finalNode.offsetTop+this.finalNode.offsetHeight/2);
    }
    getDomDistanceFromTwoNodes(){

    }
}
