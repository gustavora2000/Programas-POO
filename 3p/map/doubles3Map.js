//doubles usisng Map
//no forEach
//no k
let doubleMW = function(list){
    return list.map(function(number){
        return number*2
    });
};

let  a=[5,4,3,2,1];
console.log(doubleMW(a));

