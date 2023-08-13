function solution(num_list) {
    var answer = [];
    let n = num_list.length - 1;
    answer.push(...num_list);
    if(num_list[n] > num_list[n - 1]) {
        answer.push(num_list[n] - num_list[n - 1]);
    } else {
        answer.push(num_list[n] * 2);
    }
    return answer;
}