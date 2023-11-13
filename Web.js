console.log("Hello");

// function checkSpeed(speed){
//        speed=prompt("Enter speed: ");
//        if(speed<70){
//         console.log("Good");
//        }
//        else{
//        const speedLimit= 70;
//        const pointsperKM = 5;
//        points = Math.floor((speed-speedLimit)/pointsperKM);
//        if(points>12){
//         console.log("Lisense Suspended");
//        }
//        else{
//         console.log("Points: " , points);
//        }
//     }
// }

// let x;
// checkSpeed(x);

// function eo(limit){
//           limit = prompt("Enter limit: ");
//           for(let i=1 ; i<=limit ; i++){
//             if(i%2===0){
//                 console.log("Even" , i);
//             }
//             else{
//                 console.log("Odd" , i);
//             }
//           }
// }

// let y;
// eo(y);
// Constructor functions

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);
// console.log(circle.radius);

// Factory functions
// function createCircle(radius){
//    return{
//     radius,
//     draw(){
//         console.log('draw');
//     }
//    }
// }

// const circle1 = createCircle(1);
// console.log(circle1);