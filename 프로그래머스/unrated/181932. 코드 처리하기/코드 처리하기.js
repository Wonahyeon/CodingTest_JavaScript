function solution(code) {
    var answer = '';
    let mode = 0;
    let ret = '';
    
    for(let idx = 0; idx < code.length; idx++) {
        if(mode === 0) {
            if(code[idx] !== "1" && idx % 2 === 0) {
                ret += code[idx];
            } else if(code[idx] === "1") mode = 1; 
        } else {
            if(code[idx] !== "1" && idx % 2 === 1) {
                ret += code[idx];
            } else if(code[idx] === "1") mode = 0;
        }
    }
    if(ret) {
        answer = ret;
    } else {
        answer = "EMPTY";
    }
    return answer;
}