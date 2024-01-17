console.log('This is coming from part1.js')

// Add 2 numbers together! (just type console.log(23 + 97) into your html file)
// Add a sequence of 6 different numbers together.
// Print the solution to the following equation: (4 + 6 + 9) / 77
// Answer should be approximately 0.24675
// Let’s use variables!
// Type this statement at the top of the script tag: let a = 10
// In the console console.log(a) should print 10
// Try the following in the console: 9 * a
// and this: let b = 7 * a (returns undefined *) and then console.log(b)
// You should be getting the hang of this by now… try this sequence:
// Declare a constant variable MAX with the value 57
// Set another variable actual to MAX - 13
// Set another variable percentage to actual / MAX
// If you type percentage in the console and press Enter you should see a value like 0.7719

console.log(23 + 93)

console.log(1+2+3+4+5+6)

x = (4+6+9)/77
console.log(x)

let a = 10
console.log(a)

console.log(a * 9)

let b = 7 * a

console.log(b + ' This is b')


let max = 57

let actual = max - 13

percent = actual / max
 console.log(percent)




 function add7(num){
    return num + 7
 }

 console.log(add7(8))

 function multuply(num1, num2){
    return num1 * num2
 }

 console.log(multuply(5,5))

 function cap(str){
    lower = str.toLowerCase()
    // console.log(lower)
    upperFist = lower[0].toUpperCase()
    // console.log(upperFist)
    rest = lower.slice(1)
    // console.log(rest)
    
    combo = upperFist + rest
    
    return combo
 }

 console.log(cap('BoTH'))

 function lastLetter(str){
    strArray = str.slice('')
    // console.log(strArray)
    last = strArray[strArray.length -1]
    return last
}

    

 console.log(lastLetter('xyz'))