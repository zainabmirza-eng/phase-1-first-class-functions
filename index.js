function receivesAFunction(cb){
 return cb();
}

function returnsANamedFunction (){
    return function receivesAFunction(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}