import Shape from "./Shape";
class Line extends Shape {
  constructor(p1, p2, color, thickness) {
    super(color, thickness);
    this.startPoint = p1;
    this.endPoint = p2;
  }

  getPoint1() {
     console.log("Start point: ");
    console.log("point 1 X:" + this.startPoint.getX());
    console.log("point 1 Y:" + this.startPoint.getY());
  }

  getPoint2() {
      console.log("End point: ");
    console.log("point 2 X:" + this.endPoint.getX());
    console.log("point 2 Y:" + this.endPoint.getY());
  }
  draw() {
    super.draw();
   this.getPoint1();
   this.getPoint2();
  }
}
export default Line;