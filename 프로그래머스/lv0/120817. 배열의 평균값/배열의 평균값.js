function solution(numbers) {
    var answer = 0;
    const avg = numbers.reduce((a, b) => a + b) / numbers.length;
    answer = avg;
    return answer;
}