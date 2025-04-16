const knightTravels = require('./main');
const display = (path)=>
    {
    console.log("The shortest path from",path[0],"to",path[path.length-1],"for a knight's travel is", knightTravelsPath);
    console.log("Requiring "+(knightTravelsPath.length-1)+" Moves");
    }

const source = [0,0];
const destination = [7,7];


let knightTravelsPath = knightTravels(source, destination);
display(knightTravelsPath);

knightTravelsPath = knightTravels([0,0], [1,2]);
display(knightTravelsPath);

knightTravelsPath = knightTravels([3,3], [0,0]);
display(knightTravelsPath);

knightTravelsPath = knightTravels([3,3], [4,3]);
display(knightTravelsPath);

knightTravelsPath = knightTravels([3,3], [0,7]);
display(knightTravelsPath);

knightTravelsPath = knightTravels([0,0], [0,1]);
display(knightTravelsPath);

