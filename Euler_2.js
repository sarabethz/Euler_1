var sum=0;
x=0;
y=1;
z=0;
while (z<4000000){
   
   z=x+y;
    if (z%2===0){
        sum+=z;
       
    }
    x=y;
    y=z;
}  
 
console.log(sum);