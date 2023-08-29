function solution(numbers) {
    var answer = 0;
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < i; j++){
            arr.push(numbers[i] * numbers[j]);
        }
    }
    answer = arr.sort((a,b) => b - a);
    return answer[0];
}