function Path(pathCommands, pathLength) {
    pathCommands.toString = function() {
        return this.join(" ");
    }
    Shape.call(this, "path", {d: pathCommands, pathLength: pathLength});
}
Path.prototype = Object.create(Shape.prototype);
Path.prototype.constructor = Path;

Path.prototype.move = function(dx, dy) {
    for (var i = 0; i < this.attributes.d.length; i++) {
        this.attributes.d[i].move(dx, dy);
    }
    this.draw();
}

function PathCommand(command, args) {
    this.command = command;
    this.args = args;
}
PathCommand.prototype.move = function(dx, dy) {
    // only absolute commands should be moved (lowercase is relative)
    if (this.command === this.command.toUpperCase()) {
        for (var i in this.args) {
            if (i === "x" || i === "x1" || i === "x2") {
                this.args[i] += dx;
            }
            if (i === "y" || i === "y1" || i === "y2") {
                this.args[i] += dy;
            }
        }
    }
}
PathCommand.prototype.toString = function() {
    var str = this.command.toString();
    for (var i in this.args) {
        str += " " + this.args[i];
    }
    return str;
}