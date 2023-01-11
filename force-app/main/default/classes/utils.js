

export const PI = 3.14

export function area(radius){
    return PI * radius * radius
}

// // export together

// --> export {PI, area}

// // export with alias

// --> export {PI_Value as PI, area}

export function minus(a,b){
    return a-b
}