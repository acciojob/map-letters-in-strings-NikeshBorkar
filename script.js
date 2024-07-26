//your JS code here. If required.
function mapLetters(key){
	let n=key.length
	let obj={}
	for(let i=0;i<n;i++){
		let x=key[i]
		if(obj[x]==undefined){
			obj[x]=[i]
		}else{
			obj[x].push(i)
	}
	}
	return obj
}
let key=prompt();
alert(mapLetters(key)) 