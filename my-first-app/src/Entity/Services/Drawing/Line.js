import Shape from "./Shape";
class Line extends Shape
{
  constructor(p1,p2,color, thickness)
  {
    super(color,thickness);
    this.startPoint = p1;
    this.endPoint = p2;
  }

  draw() {
    super.draw();
    console.log("Start point: " + this.startPoint.display());
    console.log("End Point: " + this.endPoint.display());
  }
}
export default Line;