let doubleMW = function(list){
    return list.map(function(number){
        if(number === 3){
            return 'a'
        }
        if(number === 2){
            return 'b'
        }
        if(number === 1){
            return 'c'
        }
        else
        {
            'undefined'
        }
    });
};

let  a=[5,4,3,2,1];
console.log(doubleMW(a));