function SquareFactory(){

};

//标准工厂模式写法
SquareFactory.create = function(type, x, y, color){
    if(typeof SquareFactory.prototype[type] == 'undefined'){
        throw 'no this type';
    };
    // 沿着它的继承连可以找到一样的原型 说明有继承关系
    if(SquareFactory.prototype[type].prototype.__proto__ !== SquareFactory.prototype){
        SquareFactory.prototype[type].prototype = new SquareFactory();
    };

    var newSquare = new SquareFactory.prototype[type](x, y, color);
    return newSquare;
};
//生成流水线的流程
SquareFactory.prototype.init = function(square, color){
    square.viewContent.style.position = 'absolute';
    square.viewContent.style.width = square.width + 'px';
    square.viewContent.style.height = square.height + 'px';
    square.viewContent.style.backgroundColor = color;
    square.viewContent.style.left = square.x * SQUAREWIDTH + 'px';
    square.viewContent.style.top = square.x  * SQUAREWIDTH + 'px';
}

SquareFactory.prototype.Floor = function(x, y, color){
    var oFloor = new Floor(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(oFloor, color);
    return oFloor;
}

SquareFactory.prototype.Stone = function(x, y, color){
    var oFloor = new Stone(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(oFloor, color);
    return oFloor;
}

SquareFactory.prototype.Food = function(x, y, color){
    var oFloor = new Food(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(oFloor, color);
    return oFloor;
}

SquareFactory.prototype.SnakeHead = function(x, y, color){
    var oFloor = new SnakeHead(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(oFloor, color);
    return oFloor;
}

SquareFactory.prototype.SnakeBody = function(x, y, color){
    var oFloor = new SnakeBody(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(oFloor, color);
    return oFloor;
}

// SquareFactory.create('Floor', x, y, 'orange');
// SquareFactory.create('Stone', x, y, 'black');