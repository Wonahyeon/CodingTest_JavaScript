function solution(array, n) {
    array.sort((a, b) => a - b);
    var answer = 0;
    let arr = [];
    let idx = 0;
    for(let i = 0; i < array.length; i++){
        arr.push(Math.abs(n - array[i]));
        idx = arr.indexOf(Math.min(...arr));
    }
    answer = array[idx];
    return answer;
}