function regularFunction() {
    console.log(this);
}


const arrowFunction = () => {
    console.log(this);
};

const obj = {
    regularMethod: regularFunction,
    arrowMethod: arrowFunction
};

obj.regularMethod(); 
obj.arrowMethod(); 
