function solution(order) {
    var answer = 0;
    let arr = String(order).split('');
    arr.map(num => {
       switch(Number(num)){
           case 3:
           case 6:
           case 9:
               return answer++;
       } 
    });
    return answer;
}