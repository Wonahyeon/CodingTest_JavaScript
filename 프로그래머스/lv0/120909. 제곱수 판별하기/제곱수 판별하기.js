function solution(n) {
    var answer = 0;
    let res = Math.sqrt(n);
    if(res - Math.floor(res) === 0){
        answer = 1;
    } else answer = 2;
    return answer;
}