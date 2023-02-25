let set1 = [3, 1, 7, 9]
let set2 =  [2, 4, 1, 9, 3]
let sum = 0

for(let i = 0 ; i <= set1.length-1 ; i++){
    for(let j = 0 ; j <= set2.length-1 ; j++){
        if(set1[i] == set2[j]){
             sum = sum + set2[j]
        }
    }
}

console.log(sum)