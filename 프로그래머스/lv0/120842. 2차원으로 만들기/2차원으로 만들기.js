function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < num_list.length; i + n){
        let new_arr = num_list.splice(i, n);
        answer.push(new_arr);
    }
    return answer;
}