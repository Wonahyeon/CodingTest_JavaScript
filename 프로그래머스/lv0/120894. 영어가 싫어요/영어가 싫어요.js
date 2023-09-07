function solution(numbers) {
    var answer = 0;
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
     arr.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    answer = Number(numbers);
    return answer;
}