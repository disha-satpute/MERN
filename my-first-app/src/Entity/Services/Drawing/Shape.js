
class Shape{
    constructor(color, thickness)
    {
        this.color=color;
        this.thickness=thickness;
    }

    draw()
    {
        console.log("Color: "+this.color);
        console.log("Thickness: "+this.thickness);
    }
}
export default Shape;