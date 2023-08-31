function solution(my_string) {
    var answer = [];
    let arr = my_string.split('');
    arr.map(a => {
        if(!isNaN(a)) return answer.push(Number(a)); 
    });
    
    return answer.sort((a, b) => a - b);
}