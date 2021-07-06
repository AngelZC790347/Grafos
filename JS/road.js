
export class Road{
    constructor(tamaño,initID,finalID){
        this.initNode = document.getElementById(initID);
        this.finalNode = document.getElementById(finalID);
        this.roadId =`roadFrom${initID}To${finalID}`;
        if (this.initNode==null || this.finalNode==null) {
            throw "Any of Node does not exist";
        }else{
            console.log(this.finalNode,this.initNode);
            let roadElement=document.createElement('svg');
            let lineElement=document.createElement('line');
            lineElement.id=`line-${this.initNode.innerHTML}-${this.finalNode.innerHTML}`;
            console.log(lineElement)
            roadElement.className="road";
            roadElement.style.height=`${tamaño}px`;
            document.body.append(roadElement);
            console.log(this.initNode.clientTop+this.initNode.offsetHeight/2+'px');
            roadElement.style.top=`${this.initNode.offsetTop+this.initNode.offsetHeight/2}px`;
            roadElement.style.left=`${this.initNode.offsetLeft+this.initNode.offsetWidth/2}px`;
            this.finalNode.style.top=`${roadElement.offsetTop+roadElement.offsetHeight}px`;
            this.finalNode.style.left =`${roadElement.offsetLeft-this.finalNode.offsetWidth/2}px`
        }
    }
}
export default function addRoad(){
    let fieldNodeStart=document.getElementById('node-start').value;
    let fieldNodeFinal=document.getElementById('node-final').value;
    let tamañoRoadField= document.getElementById('tam-road').value;
    if (fieldNodeStart!=="" && fieldNodeFinal !=="" && tamañoRoadField !== "") {
        try{
            let road1=new Road(tamañoRoadField,`node-${fieldNodeStart}`,`node-${fieldNodeFinal}`); 

        }catch(error){
            console.error(error);
        }
    }else{
        console.error('all fields must be writted');
    }
}