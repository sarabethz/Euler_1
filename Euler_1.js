var sum=0;
for (var i=1000; i>0; i--){
    if (i%3===0 ||i%5===0){
       console.log(i);
        sum+=i;
    }
}
    console.log(sum);