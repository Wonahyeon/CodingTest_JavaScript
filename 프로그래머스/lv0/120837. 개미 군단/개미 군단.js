function solution(hp) {
    var answer = 0;
    answer = Math.floor(hp / 5) + Math.floor(hp % 5 / 3) + Math.floor(hp % 5 % 3);
    return answer;
}