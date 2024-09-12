import Shape from "./Shape";
class Circle extends Shape {
  constructor(p1, radius, color, thickness) {
    super(color, thickness);
    this.center = p1;
    this.radius = radius;
  }

  draw() {
    super.draw();
    console.log("center point: " + this.center.display());
    console.log("radius: " + this.radius);
  }
}
export default Circle;