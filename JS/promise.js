function pintarButton() {
	return new Promise((reslve,reject)=>{
		setTimeout(()=>reslve(),3000)		
	})
}

(async function () {
	for (var i = 0; i < 10; i++) {
		let res = await pintarButton()
		console.log(res)
	}
})()
