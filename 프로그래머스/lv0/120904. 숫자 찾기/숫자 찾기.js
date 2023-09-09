function solution(num, k) {
    var answer = 0;
    let res = String(num).indexOf(k);
    if(res === -1){
        answer = res;
    } else answer = res + 1;
    return answer;
}