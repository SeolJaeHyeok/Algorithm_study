// 12분
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    let answer;

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    return answer;
}
