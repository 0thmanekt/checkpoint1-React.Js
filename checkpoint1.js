
let cptv = 0
let cpts = 0
let sentence = "This is a sentence."
sentence = sentence.toLowerCase()
for(let i=0; i <= sentence.length ; i++){
    switch (sentence[i]) {
        case "a" :
        case "e" :    
        case "i" :
        case "o" :
        case "u" :
        case "y" : cptv++;
    }
    if(sentence[i] === " "){
        cpts++;
    }
}
cpts++;

console.log("The number of voyels is : " + cptv)
console.log("The number of words is : " + cpts)
