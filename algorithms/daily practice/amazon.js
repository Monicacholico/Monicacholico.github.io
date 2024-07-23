let num = [2];

let result = Math.sqrt(num);


console.log(result)


function findPair(allocations, numDeliveries) {

    let bestRoutes = [];
    allocations.forEach(allocation => {
        let sum = 0;
        let minDistance = 0;
        for(let i = 0; i < allocation.length; i++) {
            sum += Math.sqrt(allocation[i]);
            let minValue = Math.min(sum);
            console.log(minValue);
            minDistance = minValue
            return minDistance;
        }
        if(allocation.has(minDistance)) {
            bestRoutes.push(allocation);
        }

    })
    return bestRoutes;

    /*then if there are n numDeliveries in the best routes (pair of number) with at least one same number
    then return those best routes.
    */
}

console.log(findPair([[1,2,],[3,4], [1, -1]]));