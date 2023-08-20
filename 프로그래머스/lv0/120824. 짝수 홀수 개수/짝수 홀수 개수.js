function solution(num_list) {
    var answer = [];
    let odd = 0;
    let even = 0;
    num_list.map(num => {
        if(num % 2 === 0){
            return even++;
        } else {
            return odd++;
        }
    });
    answer.push(even, odd);
    return answer;
}