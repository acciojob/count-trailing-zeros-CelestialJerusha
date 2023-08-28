function trailingZeros(n) {
  //your JS code here. If required.
	let a = n;
                    for(let i=1;i<n;i++){
                        a=a*i;
                    }
                    let count=0;
                    while(a!==0){
                        let rem = a%10;
                        if(rem === 0){
                            count++;
                        }
                        a=a/10;
                    }
                    return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
