function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let mul = 1;
    num_list.map(num => {
        sum += num;
        mul *= num;
    });
    answer = mul < sum ** 2 ? 1 : 0;
    return answer;
}