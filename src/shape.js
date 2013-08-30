var shapeId = 0;
var shapesArray = new Array();
var clicked = null;
var selected = null;
$(document).mouseup(function() { clicked = null });
$(document).mousemove(function(event) { 
    if (clicked != null) {
        shapesArray[clicked].move(
            event.originalEvent.webkitMovementX | event.originalEvent.mozMovementX, 
            event.originalEvent.webkitMovementY | event.originalEvent.mozMovementY);
    }
});
$(document).mousedown(function() { 
    clearSelection();
    selected = null
});

function clearSelection() {
    if (selected != null) {
        delete shapesArray[selected].attributes['class'];
        shapesArray[selected].draw();
    }
}

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
    $(shape).mousedown(this.mouseDownHandler(context));
    $(shape).attr(this.attributes);
    return shape;
}

Shape.prototype.mouseDownHandler = function(context) {
    return function(e) {
        clearSelection();   
        selected = context.id;
        clicked = context.id;
        context.attributes['class'] = "selected";
        context.draw();
        console.log(shapesArray[selected]);
        e.stopPropagation();
    }
}

Shape.prototype.draw = function() {
    if ($("#Shape" + this.id).length > 0) {
        $("#Shape" + this.id).replaceWith(this.create());
    } else {
        $("#canvas").append(this.create());
    }    
    $("[class~=selected]").attr("stroke","blue").attr("stroke-width", 3);
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