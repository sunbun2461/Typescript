function addTwo(num: number){
    // return num + 2;
    return "hello";  // there is no error because you did not declare the function to only return a number
}

//to be extra safe
function addTwoV2(num: number): number{
    return num + 2;
    // return "hello" //if someone trys to add this here, it won't work, if they tried above it would
}


function getUpper(val: string){
    return val.toUpperCase;
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false ) => {}
let loginUserV2 = (name: string, email: string, isPaid: boolean) => {}

addTwo(5);
getUpper('thomas');
signUpUser('thomas','a@a.com',false);
loginUser("t", "a@a.com");

// union types exists shown quickly below (more on this later)
function getValue(myVale: number){
    if(myVale > 5){
        return true
    }
    return "200 OK"
}


// in arrow function 
const getHello = (name: string):string => {
    return "Hello " + name;
}

// const heros = ['thor', 'spiderman', 'ironman']
const heros = [1,2,3]

heros.map( (hero): string => {
    return `The hero is ${hero}`
})


// documentation 

function consoleError(errmsg: string): void{
    console.log(errmsg)
    // return 1 // from what I can gather, this :void makes it so in case someone happens to add something like return 1, or return anything, it makes it so they cannot, void seems to mean, never return. 
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}



export{}