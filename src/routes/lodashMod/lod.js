const lodash= require("lodash")


    const monthNames=["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "Novmber", "December"]; 
  
function arrSpliter(){

    console.log (lodash.chunk(monthNames,3)) ; 

}



    
    const oddNumbers=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    function giveTail(){
        console.log(lodash.tail(oddNumbers));
    }



const arr1=[1, 2, 3, 4]
const arr2=[3, 6, 1, 7]
const arr3=[4, 6, 1, 2]
const arr4=[6, 9, 1, 4]
const arr5=[0, 5, 2, 5]

function arrUnion(){
    console.log(lodash.union(arr1, arr2, arr3, arr4, arr5));
}


const dict = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

function getPairs(){
    console.log(lodash.fromPairs(dict));
}

module.exports.arrSpliter= arrSpliter
module.exports.giveTail = giveTail
module.exports.arrUnion= arrUnion
module.exports.getPairs= getPairs




