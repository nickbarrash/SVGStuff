function SkewEllipse(id, sx, sy) {
    $("#"+id).attr("rx", $("#"+id).attr("rx") * sx);
    $("#"+id).attr("ry", $("#"+id).attr("ry") * sy);
}

function moveEllipse(id, tx, ty) {
    $("#"+id).attr("cx", $("#"+id).attr("cx") + tx);
    $("#"+id).attr("cy", $("#"+id).attr("cy") + ty);
}

window.onload = function() {
    new Rect(400,10,100,100).fill("green").stroke("brown").draw();
    new Ellipse(150,100,10,10).draw();
    new Line(200,200,150,150).stroke("blue").draw();
    new Polyline([20,20,60,60,20,60,60,20]).fillRule("nonzero").draw();
    new Polygon([350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161]).draw();
    SkewEllipse(1, 10,1);
   // moveEllipse(1, 40, 40);
}