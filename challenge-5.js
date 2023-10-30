function filterList(arr) {
    let newArray = arr.filter( i => typeof i === 'number');
    return newArray; 
 }
 console.log(filterList([1,2,'a','b']))
 console.log(filterList([1,'a','b',0,15]))
 console.log(filterList([1,2,'aasf','1','123',123]))
 console.log(filterList(['wk', 4, 5, 6, 'yl', 'to' ]))
 console.log(filterList([3, "Pop", 8, 9, 7,"learn" ]))
 console.log(filterList(["t", 9]) )

  module.exports =filterList