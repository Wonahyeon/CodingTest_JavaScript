function solution(numbers, k) {
    var answer = 0;
    let arr = [];
    for(let i = 1; i <= k; i++){
        arr.push(...numbers);
    }
    answer = arr[2 * k - 2];
    
    return answer;
}