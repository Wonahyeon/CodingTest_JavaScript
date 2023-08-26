function solution(emergency) {
    var answer = [];
    let arr = emergency.slice().sort((a,b) => b - a);
    answer = emergency.map(el => arr.indexOf(el) + 1);
    return answer;
}