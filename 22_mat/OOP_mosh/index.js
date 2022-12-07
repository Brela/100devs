

/* function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    };
}
const circle1 = CreateCircle(1)
circle1.draw()
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(1);

for (let key in circle) {
    console.log(key, circle[key]);
}

// for getting properties(keys) and not methods (functions)
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

console.log(typeof '!')