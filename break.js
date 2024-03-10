// for(i=1; i<=20; i++){
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }
// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('Roast den , gift item ansi');
//     roastGiven++;
//     if(roastGiven >4){
//         break;
//     }

var numbers = [45, 87, 89, 56, 39, 100, 109, 230, 320, 10];
for(var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
    
}
