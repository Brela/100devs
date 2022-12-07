//Create a stopwatch object that has four properties and three methods

let stopWatch = {
    color: 'black',
    time: 12,
    origin: 'USA',
    cost: '$500'


}
stopWatch.yay = function () {
    return `yay ${stopWatch.time} ${stopWatch.origin} ${stopWatch.cost}`
}

console.log(stopWatch.yay())