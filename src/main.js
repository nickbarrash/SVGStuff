function SkewEllipse(id, sx, sy) {
    var shape = shapesArray[id];
    shape.attributes.rx *= sx;
    shape.attributes.ry *= sy;
    shape.draw();
}

function moveEllipse(id, tx, ty) {
    shapesArray[id].move(tx, ty);
}

window.onload = function() {
    new Rect(400,10,100,100).fill("green").stroke("brown").draw();
    new Ellipse(150,100,10,10).draw();
    new Line(200,200,150,150).stroke("blue").strokeWidth(10).strokeLinecap("round").draw();
    new Polyline([50,375,150,375,150,325,250,325,250,375,350,375,350,250,450,250,450,375,550,375,550,175,650,175,650,375,750,375,750,100,850,100,850,375,950,375,950,25,1050,25,1050,375,1150,375]).fill("none").stroke("blue").strokeWidth(10).strokeLinejoin("bevel").draw();
    new Polygon([350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161]).draw();
    new Path([new PathCommand("M",{x:100,y:100}), new PathCommand("L",{x:300,y:100}), new PathCommand("L",{x:200,y:300}), new PathCommand("z")]).draw();
    new Text("lol", 400, 400, 100, 100, 0, 100).draw();
    SkewEllipse(1, 10, 1);
    moveEllipse(1, 40, 40);
}