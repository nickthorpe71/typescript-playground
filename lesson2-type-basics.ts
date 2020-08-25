//---lesson 2-----

function main() {
  const circ = (diameter: number) => { //set required parameter type 
    return diameter * Math.PI;
  }

  console.log(circ('asd')); //forces the appropriate type to be passed in as argument
}
