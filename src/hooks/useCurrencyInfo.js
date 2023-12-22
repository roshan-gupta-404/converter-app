import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // console.log(data);
    },[currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;



// this is a custom hooks. Hooks are nothing but a function that is returning some value. for ex.
// `function hello(){
//     return [];
// }`
// this can be treated as custom hook.

// these custom hooks can use builtin hooks like useEffect etc.
