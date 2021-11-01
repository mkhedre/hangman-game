// const closure = ()=>{
//     const message = 'my message'
//     const mymessage = ()=>{
//         console.log(message)
//     }
//     return mymessage
// }
// const printmessage = closure()
// printmessage()
// closure mean that inner function has access to parent function also if it has completed its jop

const counter = ()=>{
    let count =0 
    return {
        icrement(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counterapp = counter()
counterapp.icrement()
counterapp.count=0
counterapp.decrement()
counterapp.decrement()
console.log(counterapp.get())


const adder=(a)=>{
    return (b)=>{
        return a+b
    }
}
const add10 = adder(10)
console.log(add10(-4))


const createtipper = (tip)=>{
    return (percent)=>{
        return percent*tip
    }
}
const tip20 = createtipper(.2)
console.log(tip20(100))