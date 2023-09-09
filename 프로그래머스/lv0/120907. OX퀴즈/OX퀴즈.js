function solution(quiz) {
    var answer = [];
    let res = '';
    quiz.map(str => {
        const [a, r] = str.split(' = ');
        res = eval(a) === Number(r) ? "O" : "X";
        answer.push(res);
    });
    return answer;
}