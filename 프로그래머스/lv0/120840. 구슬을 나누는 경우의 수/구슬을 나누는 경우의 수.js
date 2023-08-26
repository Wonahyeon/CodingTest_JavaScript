function factorial(n){
    let result = 1;
    for(let i = 1;i <= n; i++){
        result = result * i;
    }
    return result;
}
function solution(balls, share) {
    var answer = 0;
    if(balls < share) answer = 0;
    answer = factorial(balls) / (factorial(balls - share) * factorial(share));
    return Math.round(answer);
}