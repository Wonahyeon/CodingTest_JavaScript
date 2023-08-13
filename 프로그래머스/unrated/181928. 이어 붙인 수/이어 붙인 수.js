function solution(num_list) {
    var answer = 0;
    let odd_sum ='';
    let even_sum = '';
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0) {
            even_sum += String(num_list[i]);
        } else {
            odd_sum += String(num_list[i]);
        }
    }
    answer = Number(odd_sum) + Number(even_sum);
    return answer;
}