function solution(money) {
    var answer = [];
    const cup = Math.floor(money / 5500);
    answer.push(cup, money - (5500 * cup));
    return answer;
}