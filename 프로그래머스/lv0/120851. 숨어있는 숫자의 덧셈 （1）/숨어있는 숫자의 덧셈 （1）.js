function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('');
    for(let i of arr){
        if(Number(i)) answer += Number(i);
    }
    return answer;
}