class Point {
    constructor(x,y){
    if(typeof x === "undefined"){
            this.x = 0;
    }
        else{
        this.x = x;
    }
    if (typeof y === "undefined"){
        this.y = 0;
    }
        else{
        this.y = y;
	}

    };
    toString(){return"("+this.x+","+this.y+")";};
    distance(p){};
    clone(){return new Point(this.x,this.y);};
};

module.exports = Point