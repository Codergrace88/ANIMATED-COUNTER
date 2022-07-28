// const statValue = document.querySelectorAll('.stat-value')
// const Content1 = document.querySelector('.content1')
// const Content2 = document.querySelector('.content2')
// const Content3 = document.querySelector('.content3')
let statVal_1 = setInterval(counterValue1,1000)
let statVal_2 = setInterval(counterValue2,2000)
let statVal_3 = setInterval(counterValue3,3000)
let count = 0;

function counterValue1(){
	 count++
	let Content1 = document.querySelector('.stat-value-1')
		Content1.innerHTML =count
}
function counterValue2(){
	count++
	let Content2 = document.querySelector('.stat-value-2')
		Content2.innerHTML =count
}


function counterValue3(){
	count++
	let Content3 = document.querySelector('.stat-value-3')
		Content3.innerHTML =count
}