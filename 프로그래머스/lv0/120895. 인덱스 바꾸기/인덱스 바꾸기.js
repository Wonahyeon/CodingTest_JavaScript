function solution(my_string, num1, num2) {
    var answer = '';
    let arr = my_string.split('');
    arr.splice(num1, 1, my_string[num2]);
    arr.splice(num2, 1, my_string[num1]);
    answer = arr.join('');
    return answer;
}