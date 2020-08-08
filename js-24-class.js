class Area {
    circle(radius){
        var area = 3.14 *radius*radius;
        console.log("Area is : "+ area);
    }
    rectangle(side1,side2){
        var area = side1 *side2;
        console.log("Area is : "+ area);

    }
    square(side){
        var area = side*side;
        console.log("Area is : "+ area);

    }
    triangle(base,height){
        var area = 0.5*base*height;
        console.log("Area is : "+ area);

    }
}

module.exports = Area;