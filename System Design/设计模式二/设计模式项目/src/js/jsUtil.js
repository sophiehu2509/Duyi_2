var tool = {
    inherit:function(target, origin){
        var temp = function (){};
        temp.prototype = origin.prototype;
        target.prototype = new temp();
        target.prototype.constructor = target;
    },
    extends: function(origin){
        var result = function(){
            origin.apply(this, arguments);
            return this;
        }
        this.inherit(result, origin);
        return result;
    },
    single:function(origin){
        //只创造一个 singleResult
        var singleResult = (function(){
            var instance;
            return function(){
                if(typeof instance == 'object'){
                    return instance;
                }
                //如果没有参数
                origin && origin.apply(this,arguments);
                instance = this;
            }
        })();
        //与原型形成关系
        origin && this.inherit(singleResult, origin);
        return singleResult;
    }

}

// var SnakeHead = tool.single(Square);
// var oSh1 = new SnakeHead(2, 2, 200, 200);
// var oSh2 = new SnakeHead(3, 3, 400, 400);