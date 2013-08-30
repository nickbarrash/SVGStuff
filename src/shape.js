var shapeId = 0;
var shapesArray = new Array();
var clicked = null;
$(document).mouseup(function() { clicked = null });
$(document).mousemove(function(event) { 
    if (clicked != null) {
        shapesArray[clicked].move(event.originalEvent.webkitMovementX, event.originalEvent.webkitMovementY);
    }
});

function Shape(type, attributes) {
    this.type = type;
    this.id = shapeId;
    shapeId += 1;
    this.attributes = attributes;
    shapesArray.push(this);
}

Shape.prototype.create = function() {
    var shape = document.createElementNS("http://www.w3.org/2000/svg", this.type);
    $(shape).attr('id', "Shape" + this.id);
    var context = this;
    $(shape).mousedown(function() { clicked = context.id });
    $(shape).attr(this.attributes);
    return shape;
}

Shape.prototype.draw = function() {
    if ($("#Shape" + this.id).length > 0) {
        $("#Shape" + this.id).replaceWith(this.create());
    } else {
        $("#canvas").append(this.create());
    }
}

Shape.prototype.fill = function(color) {
    this.attributes.fill = color;
    return this;
}

Shape.prototype.fillRule = function(rule) {
    this.attributes["fill-rule"] = rule;
    return this;
}

Shape.prototype.fillOpacity = function(opacity) {
    this.attributes["fill-opacity"] = opacity;
    return this;
}

Shape.prototype.stroke = function(color) {
    this.attributes.stroke = color;
    return this;
}

Shape.prototype.strokeWidth = function(value) {
    this.attributes["stroke-width"] = value;
    return this;
}

Shape.prototype.strokeLinecap = function(type) {
    this.attributes["stroke-linecap"] = type;
    return this;
}

Shape.prototype.strokeLinejoin = function(type) {
    this.attributes["stroke-linejoin"] = type;
    return this;
}

Shape.prototype.stokeMiterlimit = function(value) {
    this.attributes["stroke-miterlimit"] = value;
    return this;
}

Shape.prototype.strokeDasharray = function(array) {
    this.attributes["stroke-dasharray"] = array;
    return this;
}

Shape.prototype.strokeDashoffset = function(value) {
    this.attributes["stroke-dashoffset"] = value;
    return this;
}

Shape.prototype.strokeOpacity = function(value) {
    this.attributes["stroke-opacity"] = value;
    return this;
}