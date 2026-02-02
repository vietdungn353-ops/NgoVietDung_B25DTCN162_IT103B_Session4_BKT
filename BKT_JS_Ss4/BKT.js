// Bài 1

let n = prompt("Hãy nhập số nguyên n");
n = Number(n);

if(n%2==0){
    console.log(`Số ${n} là số chẵn`);
}else{
    console.log(`Số ${n} là số lẻ`);
}
let i;
if(n > 0){
    for(i = 1; i<=n; i++){
        console.log(`- ${i} -`);
    }
}else{
    console.log("Giá trị n không hợp lệ để tạo dãy số")
}


// Bài 2
/*
let i, sum;
sum = +0;
i = Number(i);
for(i = 1; i<= 50; i++){
    if(i%3 == 0 && i%5 != 0){
        console.log(`-${i} Fizz-`);
        sum +=i ;
    }else if(i%3 != 0 && i%5 == 0){
        console.log(`-${i} Buzz-`);
    }else if(i%3 == 0 && i%5 == 0){
        console.log(`-${i} FizzBuzz-`);
    }
}
console.log(`Tổng của tất cả các số đã in ra chữ Fizz là: ${sum}`);
*/
