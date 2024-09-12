class Point{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  static display(){
    console.log("x point: " + this.x);
    console.log("y point: " + this.x);
  }

   getX()
  {
    return this.x;
  }

   getY(){
    return this.y;
  }
}
export default Point;