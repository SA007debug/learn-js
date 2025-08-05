//for of loop:
//Array:
const arr = [1,2,3,4,5]
for (const i of arr) {
    //console.log(i);
}
//String:
const name = "Sarthak"
for(const i of name){
    //console.log(i);    
}

//Maps:
//Initialize a map:
const mpp = new Map()
//In order to insert key-value pairs in a map,use set(don't use square brackets in maps,you can use it in objects but not in maps):
mpp.set("HI",1)
mpp.set("HELLO",2)
mpp.set(3,"HOW")//any type of key-value pair can be added in the same map.
mpp.set(true,'a')
//Now you can print the whole map and it will also show the size of the map:
console.log(mpp);
//You can also use for of loop in a map:
for(const [i,j] of mpp){
    console.log(i);//this will print all the keys
}
for(const [i,j] of mpp){
    console.log(j);//this will print all the values
}
for(const [i,j] of mpp){
    console.log(`Key:${i} and Value:${j}.`);
}
