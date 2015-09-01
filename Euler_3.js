var prime;
var count=0;

for (var i=2; i<=10000 ;i++){
    
  if (600851475143%i===0){
      for (var t=2;t<i; t++){
          if (i%t===0){
              count++;
           }
       }
       if (count++===0){
              prime=i;
              console.log(prime);
        }
    }count=0;
    
}console.log(prime);