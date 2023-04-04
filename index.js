// let pass = prompt("enter password")
// a = pass.length
//let num2 = +prompt("enter second number")
// //if (num1>=num2){
//     // console.log(num1)
// }
// else {
//     console.log(num2)
// }
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num2 == 0?"На 0 делать нельзя":num1/num2)

// console.log(a>10 && a<20)


// const array = [1, 2,3,4,5,67,8,8,3]
// for(let i = 0; i<array.length;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// array.push("Evgenii")
// console.log(array)
// console.log(array[5])
// array.forEach((value, idx, array)=>{
//     console.log(`value: ${value} index: ${idx}`)
//     if(idx<100){
//         array.push(`${idx}`)
//     }
// })
// console.log(array)
// for(let i = 0; i < array.length;i++){
//     console.log(array[i])
// }

// for(let name of array){
//     console.log(name)
// }


// console.log(array.map((value) => value + 2))
// console.log(array.filter((value) => value%2 ==0))
// console.log(array.find((value) => value>5))
// console.log(array.reduce((accumulator, value)=>acc+value))

// const arr = [-5,-3,3,9,-6,-1,8]

// const arr1 = arr.map((value) => Math.abs(value))
// console.log(arr.filter((value)=> value>= 0))
// console.log(arr1)

// const user ={
//     login: 'vasya',
//     password: 'qwerty',
//     5:4,
//     parents: {
//         mother:{
//             name:"alkewg", 
//             phone:"8973665373663",
//             email:"glsdgj@mail.ru"
//         },
//         father:{
//             name:"papabl",
//             phone:"293572752523"
//         },
//         logInfo:function () {
//             console.log(this)
//         }
//     }

// }




    // },
    // logInfo:function () {
    //     console.log(this.login)
    // }
    // logInfo: ()=> {
    //     console.log(this.login)
    // }



// const objec ={
//     id:1535,
//     name:"ivan",
//     lastname:"petrov",
//     age:24,
//     salary:"loh",
//     managerName:"petka"
// }

// for(key in objec){
    
//     }

// const product1 = {
//     name:"bread",
//     amount:5,
//     price:40,
// }
// const product2 = {
//     name:"chokolate",
//     amount:3,
//     price:100,
// }
// const product3 = {
//     name:"milk",
//     amount:8,
//     price:110,
// }
// const product4 = {
//     name:"pelmeni",
//     amount:2,
//     price:300,
// }
// const product5 = {
//     name:"mayonez",
//     amount:1,
//     price:170,
// }

// const arrayProduct = [product1,product2,product3,product4,product5]
// const [p1,p2,p3,p4,p5] = arrayProduct
// console.log(p4)
// for(let product of arrayProduct){
//     // console.log(product)
//     for(let [key,value] of Object.entries(product))
//     console.log(value   )
// }
// console.log(arrayProduct.reduce((acc,product) => (acc + product.price)/ arrayProduct.length ,0))
// console.log(arrayProduct.reduce((acc,product) => ({price: acc.price+product.price})))
// console.log(arrayProduct.filter(({name,amount,price})=>amount>3))
// console.log(arrayProduct.map(({name,amount,price})=>price*=1.5))
// console.log(user.parents?.grandfather?.parents)
// for(let key in user){
//     console.log(`${key} ${user}`)
// }
// console.log(user.password)

// const getLogin = () => {
//    const {login, password, ...other}=user
//    console.log(login)
//    console.log(other)
// }
// getLogin()

// const newuser = Object.assign({
//     name:"kolya"

// },{
//     description:"sours"
// }
// )
// console.log(newuser)


// var ar = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
// function flutten(ar){
//     var ar2 = ar.flat(Infinity)
//     console.log(ar2)
    
// }

// flutten(ar)

// let Strin = 'bread28muka31.23soli250'

// const splitSring = Strin.split('')
// let array = ''
// console.log(splitSring)
// function getsum(){
//     for(let i = 0; i < splitSring.length;i++ ){
//         if(Number(splitSring[i])){
//             array += splitSring[i]
//             console.log(splitSring[i], array)
//         }
//     }
// }
// getsum(splitSring)

let chek = 'bread28muka31.23soli250'
let invalidChek = 'bread28.1muka24.31soli250.232627' 

function Numb(str) {
    let result = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
    let rez = Object.values(result)
    for(let i=0;i < rez.length;i++){
        if((rez[i].toString().match(/\.(\d+)/)?.[1].length) > 2){
            
            console.log('invalid chek') 
            break   
        }
        if((rez[i].toString().match(/\.(\d+)/)?.[1].length) <= 2) {
            console.log(rez.reduce((acc,rez) => (acc + rez), 0))
        }
    }
    // console.log(result)

}

Numb(invalidChek)
