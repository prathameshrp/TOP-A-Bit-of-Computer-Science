function knightTravels(source, destination)
{

const visited = [...Array(8)].map((x)=>[...Array(8)].map((y)=>0));

const path = [];

let current = source;

visited[source[0]][source[1]] = 1;

const queue = [[...source]];

while(current[0] !== destination[0] || current[1] !== destination[1])
{
    current = queue.shift();

    let x = current[0];
    let y = current[1];

    let pos = [
        [x+2, y+1],
        [x+2, y-1],
        [x-2, y+1],
        [x-2, y-1],
        [x+1, y+2],
        [x-1, y+2],
        [x+1, y-2],
        [x-1, y-2]
    ];

   pos.forEach((entry)=>{
    if(entry[0] >= 0 && entry[0] < 8 && entry[1] >=0 && entry[1] < 8 && !visited[entry[0]][entry[1]])
    {
        visited[entry[0]][entry[1]] = 1;
        queue.push([...entry, current]);
    }
   })
}

path.unshift([current[0], current[1]]); 

let traceBack = current[2];
while(traceBack !== undefined)
{
    path.unshift([traceBack[0], traceBack[1]]);
    traceBack = traceBack[2];
}

return path;

}

module.exports = knightTravels;