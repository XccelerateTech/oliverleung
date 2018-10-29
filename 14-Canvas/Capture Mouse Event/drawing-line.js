class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        this.endDrawing = false;
        this.context.strokeStyle = brush.color;
        this.context.lineJoin = "round";
        this.context.lineWidth = brush.size;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }
    onMouseMove(){}
    onMouseUp(){
        this.endDrawing = true;
        canvasPush();
    }
    onMouseLeave(){
        if(!this.endDrawing){
            this.endDrawing = true;
            canvasPush();
        }
    }
    onMouseEnter(){
        // if(!this.endDrawing){
        //     canvasPush();
        //     this.endDrawing = true;
        // }
    }

    draw(x,y){
        // this.context.save();
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();
        // this.context.restore();
    }
}