// Q) What is block in JavaScript?
// > multiple js statements formed in a group enclosed in curly brackets and it forms a block

// Q) What is need of a block/Grouping?
// > JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block eg in loop, if else condition etc.



// write a simple function:
// even empty script is perfectly valid js script, what about empty brackets!!
{
 var a = 10;//it is global scoped can be acces any were
 let b = 20;//it is block scoped can only access here
 const c =30; //it is block scoped can only access here
}

// When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 

// This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!

// so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'



 var a = 100;//it will  be defined in global scope
{
 var a = 10;//it will  be reintialized in global scope
 let b = 20;
 const c =30; 
 console.log(a);//10
 console.log(b);//20
 console.log(c);//30
}
 console.log(a);//10 important case
 console.log(b);//not defined since let is block scoped
 console.log(c);//not defined since const is block scoped

// in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10  since it is reintialized in global scope therefore it will affect the value of the the a ouside the block. 

let b= 100;
{
    let b=10;
    console.log(b);//10
}
console.log(b);//100

// since because let is block scoped




// Illegal shadowing:

let a = 200;
{
 var a =20;
}

// as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared


