function solution(a, d, included) {
    var answer = 0;
    let array = [];
    let n = included.length;
    for(let i = 0;i < n;i++){
        if(i===0){
            array[0] = a;
        } else {
            array[i] = array[i-1] + d;
        }
        if(included[i]) answer += array[i];
    }
    return answer;
}