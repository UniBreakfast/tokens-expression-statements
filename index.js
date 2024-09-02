//! All this categorization is a bit subjective 
//! and is not to be taken as a definitive list
//! of all the tokens in JavaScript.
//! Literature and highligters can use 
//! less or more detailed categorizations.
//! Some tokens may be put in more than one category.


//* tokens:


var id = 'lit'; //mnemonic
/* 
var - keyword
id - identifier
= - operator
'lit' - literal
; - punctuator
//?mnemonic - comment
*/


//* keywords: 
/*
var  let  const  function  return  yield  class  static  
if  else  do  while  for  of  in  break  continue  
switch  case  default  throw  try  catch  finally  
new  delete  typeof  instanceof  get  set  async  await
import  export  debugger  void  with  this  super  
arguments  null  undefined  true  false  Infinity  NaN
*/


//* identifiers:
/* 
Names of any and all binding entities that are not keywords:
variables, constants, functions, parameters, properties, 
methods, classes - all subject to valid identifier rules.
*/


//* operators:
/*
+  -  *  /  %  **
=  ==  !=  ===  !==  <  <=  >  >=
++  --  !  &&  ||  ??  ? :  
+=  -=  *=  /=  %=  **=  &&=  ||=  ??=
.  ?.  [ ]  ( )  ...  ,
&  |  ^  ~  >>  <<  >>>  
*/


//* literals:
/*
'lit'  "lit"  `lit` - strings
123  -4  0.56  4e6  2e-5  1_000_000 - numbers
0b10  0o777  0xFF - numbers in binary  octal  hex
NaN  Infinity  -Infinity - also number values
true  false - booleans
null  undefined - singular values of monotypes
1234567890n - bigints
*/


//* punctuators:
/* 
,  ;  :  ( )  [ ]  { }  ${ } 
*/


//* comments:
// to end of line
/* 
  multiline
  comment
*/


//! During initial parsing of a script, the code is
//! tokenized. Then tokens are grouped into commands
//! of two kinds: expressions and statements.
//! Expressions are always return value on evaluation,
//! and any expression can be used
//! anywhere an expression is expected. 
//! Statements never return value and are used for 
//! declarations, to control flow of execution, 
//! perform unique actions or get unique effects.
//! No statement can be used in place of an expression.


//* simple expressions (single token):
//* can be named respectively, they all access a value

//? literals are basically "produce a value" commands

42  // number literal
NaN  // NaN
Infinity  // Infinity
1234567890n  // bigint literal
"lit"  // string literal
false  // boolean literal
null  // null
undefined  // undefined
;
[]  // empty array literal
{}  // empty object literal


//? single identifiers are "read binding value" commands

x  // read variable (constant, parameter) x value
parseInt  // get function parseInt
Object  // access object constructor (class)
console  // access console object


//? standalone keyword bindings are simialar to identifiers

this  // access current function execution context object
arguments  // access array-like object with function arguments
//!  NaN, Infinity, true, false, undefined, null
//!  can also be put in this category


//* compound expressions (multiple tokens):
//* can be named accordingly to the last operator evaluated

//? Even though all expressions return a value,
//? many are used for side effects (assignments, increments)


//* groups of expressions by operator category:
// arithmetic
// logical
// bitwise
// relational
// equality
// assignment
// update value
