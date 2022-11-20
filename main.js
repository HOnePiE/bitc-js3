// bt1
let n= 5
console.log(isNaN(n))   
? console.log("n ko phải là số")
: console.log("n là số");
//bt2
// bài tham khảo mạng p/s: giải thích bài này giúp em
var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0]; // ch =1 , input =[2,3]
    usedChars.push(ch);    // usedChars= [1]
    if (input.length == 0) {  // how độ dài của input về 0 đc
      permArr.push(usedChars.slice()); // nếu độ dài của input = 0 thì add hết ptử của usedChars qua permArr
    }
    permute(input); // éo hiểu cái này bỏ vào làm j
    input.splice(i, 0, ch); // input =[2,3] => input = [1,2,3] :????
    usedChars.pop(); // usedChars =[1] => usedChars =[]
  }
  return permArr // rồi có chạy đc if đâu và trả về thằng permArr này đc
};
console.log(permute([1,2,3]));

//bt3
// chỉ loại các p tử trùng éo xóa đc phần tử gốc
// đã thử nhiều cách nhưng ko làm được nên bỏ tạm bài này :v
let arrayx =[1,2,3,2,1,4,5,3];
let newArray = Array.from(new Set(arrayx));
console.log(newArray);
