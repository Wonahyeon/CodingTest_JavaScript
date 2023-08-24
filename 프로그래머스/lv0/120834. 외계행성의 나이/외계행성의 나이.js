function solution(age) {
    var answer = '';
    let stringAge = String(age);
    let str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for(let i = 0; i < stringAge.length; i++){
        answer += str[stringAge[i]];
    }
    return answer;
}