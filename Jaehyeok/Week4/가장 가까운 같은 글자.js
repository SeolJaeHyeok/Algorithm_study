function solution(s) {
    const answer = [];
   
   // 1) 글자와, 위치(index)를 담을 Map 객체 생성
   const map = new Map();
   
   // 2) 글자들을 하나씩 반복하여 비교
   for(let i = 0; i < s.length; i++){
   
       // 3) 동일한 글자가 있으면, (현재 위치 - 이전 위치) 값을 answer 담는다.
       if(map.has(s[i])) answer.push(i-map.get(s[i]));      
       
       // 4) 동일한 글자가 없다면, -1를 answer에 담는다.
       else answer.push(-1);    
       
       // 5) 최근 글자와, 위치(indx)로 값을 담는다.
       map.set(s[i], i);  
   };
   
   return answer;
}