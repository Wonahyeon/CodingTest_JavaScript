function solution(s) {
    var answer = 0;
    let arr = s.split(' ');
    let index = [];
    let idx = arr.indexOf('Z');
    while (idx != -1) {
      index.push(idx);
      idx = arr.indexOf('Z', idx + 1);
    }
    let sum = 0;
    arr.map(num => {
       if(Number(num)) return sum += Number(num); 
    });
    if(index.length !== 0) {
        for(let i = 0; i < index.length; i++){
            sum -= arr[index[i] - 1];
        }
    }
    answer = sum;
    return answer;
}