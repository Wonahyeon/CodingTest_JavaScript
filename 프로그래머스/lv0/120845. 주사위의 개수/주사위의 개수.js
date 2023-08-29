function solution(box, n) {
    var answer = 1;
    box.map(len => answer *= Math.floor(len / n));
    return answer;
}