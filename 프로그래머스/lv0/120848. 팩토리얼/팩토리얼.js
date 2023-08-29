function factorial(i){
    let result = 1;
    for(let j = 1; j <= i; j++){
        result *= j;
    }
    return result;
}
function solution(n) {
    var answer = 0;
    for(let i = 1; i <= 10; i++){
        if(factorial(i) <= n) answer = i;
    }
    return answer;
}