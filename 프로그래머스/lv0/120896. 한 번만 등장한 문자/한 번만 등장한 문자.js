function solution(s) {
    var answer = [];
    let arr = s.split('');
    arr.map((str, idx) => {
       if(arr.indexOf(str) === idx && arr.lastIndexOf(str) === idx){
           answer.push(str);
       } 
    });
    
    return answer.sort().join('');
}