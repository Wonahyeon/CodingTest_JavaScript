function solution(numbers, direction) {
    var answer = [];
    let last_idx = numbers.length - 1;
    
    switch(direction){
        case "left":
            let left = numbers.slice(1);
            answer.push(...left, numbers[0]);
            break;
        case "right":
            let right = numbers.slice(0, last_idx);
            answer.push(numbers[last_idx], ...right);
            break;
    }
    return answer;
}