/* 필요할 때 불러와서 사용할 공용 자바스크립트 모듈 */

var i=1;
// 실행될 때마다 msg의 문자열들을 하나씩 출력하는 함수. 배열 msg는 각 페이지에 정의되어 있음.
// 매개변수로 문자열이 담겨있는 배열 msg와 이동할 url을 받음. 
function printMsg(msg,url){
	if(i==msg.length) // msg.length = 4 : msg 배열의 원소 수 
		location.href=url; // 'ㅁㄴㅇ.html' URL로 이동
	if(i<msg.length) // msg.length = 4 : msg 배열의 원소 수
	/* document.querySelector('선택자') : 선택자를 지정하여 지정한 선택자를 가진 영역을 지시함.
	* querySelector() 다음에 오는 코드는 지시한 영역에 실행할 동작을 부여함.
	* innerHTML = 값 : 값을 html 코드 내부에 삽입함. 이 코드에선 msg[i]의 내용을 출력하는 역할.
	* 표준 출력을 담당하는 document.write()와 달리 innerHTML은 HTML 코드에 직접적으로 값을 삽입함.
	*/
		document.querySelector('#text').innerHTML = msg[i];
		i++; // i = i + 1 : i 증가
}

// 아래 함수는 printMsg() 함수의 파생 함수. msg를 모두 출력할 시 지정된 URL로 이동하는 것이 아니라 'End' 값을 리턴함.
// 매개변수로 배열 msg와 다음에 실행할 배열 next를 받음.
function nextMsg(msg, next){
	if(i==msg.length) // msg.length = 4 : msg 배열의 원소 수
		return nextMsg(next, next);
	if(i<msg.length) // msg.length = 4 : msg 배열의 원소 수
	/* document.querySelector('선택자') : 선택자를 지정하여 지정한 선택자를 가진 영역을 지시함.
	* querySelector() 다음에 오는 코드는 지시한 영역에 실행할 동작을 부여함.
	* innerHTML = 값 : 값을 html 코드 내부에 삽입함. 이 코드에선 msg[i]의 내용을 출력하는 역할.
	* 표준 출력을 담당하는 document.write()와 달리 innerHTML은 HTML 코드에 직접적으로 값을 삽입함.
	*/
		document.querySelector('#text').innerHTML = msg[i];
		i++; // i = i + 1 : i 증가
}