const mynums=[1,2,3]

// const mytotal=mynums.reduce(function (acc,current_val){
//     console.log(`acc:${acc} and current_val :$`);
//     return acc+current_val
// },0)

// const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)

// console.log(mytotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobiledev course",
        price:499
    },
    {
        itemName:"dataScience course",
        price:9999
    }

]

const price= shoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(price)