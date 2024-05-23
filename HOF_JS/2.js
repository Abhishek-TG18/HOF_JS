function randomNumber(){
    let digit = '1234567890'
    let num=''
    num= Math.floor(Math.random()*100000)+1;
    console.log(num);
}

setTimeout(randomNumber,3000);