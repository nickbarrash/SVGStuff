function Attribute(key, value) {
  this.key = key;
  this.value = value;
}

function Shape(type, attributes) {
  this.type = type;
  this.attributes = attributes;
}

Shape.prototype.create = function() {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", this.type);
  for (var i = 0; i < this.attributes.length; i++) {
    shape.setAttributeNS(null, this.attributes[i].key, this.attributes[i].value);  
  }
  return shape;
}

function Rect(x, y, width, height, rx, ry) {
  Shape.call(this, "rect", [
    new Attribute("x", x), 
    new Attribute("y", y),
    new Attribute("width", width),
    new Attribute("height", height),
    new Attribute("rx", rx),
    new Attribute("ry", ry)
  ]);
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

function Circle(cx, cy, r) {
  Shape.call(this, "circle", [
    new Attribute("cx", cx), 
    new Attribute("cy", cy), 
    new Attribute("r", r)
  ]);
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

window.onload = function() {
    var mycircle = new Circle(150,100,10);
    var myrect = new Rect(10,10,10,10,0,0);
    $("#canvas").append(mycircle.create());
    $("#canvas").append(myrect.create());
}