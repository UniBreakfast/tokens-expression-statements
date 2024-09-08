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

42, 3.14, 12e9, 2e-5, 1_000_000, 0b10, 0o777, 0xFF  // number literals
NaN  // NaN
Infinity  // Infinity
1234567890n  // bigint literal
"lit", 'eral'  // string literals
true, false  // boolean literal
null  // null
undefined;  // undefined
[]  // empty array literal
{}  // empty object literal
/^(ab+|c*)\d?[ef]$/gi  // regular expression literal (single js token but multiple regex tokens)


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


//* groups of expressions by operator category:
// arithmetic
// logical
// bitwise
// relational
// comparison
// assignment
// call

//? Even though all expressions return a value,
//? many are used for side effects (assignments, increments)


typeof a  // выражение определения типа значения
+a  // выражение приведения к числовому значению
-a  // выражение обращения значения по знаку
a + b  // выражение суммы
a - b  // выражение вычитания
a * b  // выражение произведения
a / b  // выражение деления
a % b  // выражение получения остатка при целочисленном делении
a ** b  // выражение возведения в степень
a = b  // выражение присвоения значения сущности
a == b  // выражение проверки равенства с приведением типов
a === b  // выражение проверки равенства значений
a != b  // выражение проверки неравенства с приведением типов
a !== b  // выражение проверки неравенства значений
a < b; a > b  // выражения строгого сравнения
a <= b; a >= b  // выражения нестрогого сравнения
a += b  // выражение наращивания значения сущности
a -= b  // выражение сокращения значения сущности
a *= b  // выражение умножения значения сущности
a /= b  // выражение деления значения сущности
a %= b  // выражение замены значения сущности остатком целочисленного деления
a **= b  // выражение возведения значения сущности в степень
a && b  // выражение выбора значения логическим И
a || b  // выражение выбора значения логическим ИЛИ
a ?? b  // выражение выбора значения логическим ИЛИ по наличию значения
a ? b : c  // выражение выбора значения согласно условию
!a  // выражение логического отрицания
++a  // выражение пред-увеличения значения сущности на единицу
--a  // выражение пред-уменьшения значения сущности на единицу
a++  // выражение пост-увеличения значения сущности на единицу
a--  // выражение пост-уменьшения значения сущности на единицу
a in b  // выражение проверки вхождения ключа в объект
a.b  // выражение чтения значения свойства по идентификатору
a?.b  // выражение чтения значения свойства по идентификатору при наличии носителя
a[b]  // выражение чтения значения свойства по ключу
a[b]  // выражение взятия значения из ячейки по индексу (массивы, псевдомассивы)
a?.[b]  // выражение взятия значения по ключу (индексу) при наличии носителя
a()  // выражение вызова функции
a?.()  // выражение вызова функции при наличии таковой
a instanceof b  // выражение проверки наследования
a.b()  // выражение вызова метода по идентификатору
a[b]()  // выражение вызова метода по ключу
a.b = c  // выражение присвоения значения свойства по идентификатору
a[b] = c  // выражение присвоения значения свойства по ключу
delete a  // выражение удаления глобальной переменной
delete a.b  // выражение удаления свойства по идентификатору
delete a[b]  // выражение удаления свойства по ключу
a(b); a(b, c)  // выражения вызова функции c аргументами
a.b(c); a.b(c, d)  // выражения вызова метода c аргументами
new A; new A()  // выражение создания экземпляра типа (класса)
super()  // выражение инициализации экземпляра праконструктором
import(a)  // выражение импорта модуля
await p  // выражение ожидания завершения выполнения промиса
yield; yield a  // выражения генерации значения (только в контексте функции-генератора)
a << b  // выражение битового сдвига влево
a >> b  // выражение битового сдвига вправо
a >>> b  // выражение битового сдвига вправо с потерей знака
a & b  // выражение битового И
a | b  // выражение битового ИЛИ
a ^ b  // выражение битового ИСКЛЮЧЕНИЯ
~a  // выражение битового НЕ
a <<= b  // выражение битового сдвига значения сущности влево
a >>= b  // выражение битового сдвига значения сущности вправо
a &= b  // выражение изменения значения сущности битовым И
a |= b  // выражение изменения значения сущности битовым ИЛИ
a ^= b;  // выражение изменения значения сущности битовым ИСКЛЮЧЕНИЕМ
[...a]  // выражение создания массива со значениями итерируемого
(
{...a}  // выражение создания объекта со свойствами данного объекта
)  
a(...b)  // выражение вызова функции с высыпанием аргументов из итерируемого
a.b(...c);  // выражение вызова метода с высыпанием аргументов из итерируемого
[a] = b; [a, b] = c;  // выражения деструктуризации итерируемого
[,, a] = b;  // выражение деструктуризации итерируемого, пропуская элементы в начале
[a,...b] = c  // выражение деструктуризации итерируемого со сбором остальных значений в массив
(
{a} = b, {a, b} = c  // выражения деструктуризации объекта
)(
{a, ...b} = c  // выражение деструктуризации объекта со сбором остальных свойств в объект
)(
{a: b} = c  // выражение деструктуризации объекта c иным именем свойства/сущности
)
[[a]] = b; [{a}] = b, {a: [b]} = c, {a: {b}} = c  // выражение деструктуризации итерируемых и объектов вглубь


typeof a  // type detection expression
+a  // coercion to number expression
-a  // unary negation expression
a + b  // addition expression
a - b  // subtraction expression
a * b  // multiplication expression
a / b  // division expression
a % b  // remainder expression
a ** b  // exponentiation expression
a = b  // assignment expression
a == b  // equality expression with coercion to same type
a === b  // strict equality expression
a != b  // inequality expression with coercion to same type
a !== b  // strict inequality expression
a < b; a > b  // strict comparison expression
a <= b; a >= b  // non-strict comparison expression
a += b  // specified increment expression
a -= b  // specified decrement expression
a *= b  // specified product reassignment expression
a /= b  // specified division reassignment expression
a %= b  // specified remainder reassignment expression
a **= b  // specified exponentiation reassignment expression
a && b  // value selection by logical conjunction expression
a || b  // value selection by logical disjunction expression
a ?? b  // value selection by logical disjunction expression based on emptiness
a ? b : c  // value selection by conditional expression
!a  // logical negation expression
++a  // pre-increment expression
--a  // pre-decrement expression
a++  // post-increment expression
a--  // post-decrement expression
a in b  // membership check expression
a.b  // property read expression
a?.b  // conditional (non-emptiness) property read expression
a[b]  // read property via key expression
a[b]  // indexed element read expression
a?.[b]  // conditional (non-emptiness) indexed element read expression
a()  // function call expression
a?.()  // conditional (non-emptiness) function call expression
a instanceof b  // inheritance check expression
a.b()  // method call expression
a[b]()  // method call via key expression
a.b = c  // property assignment expression
a[b] = c  // property assignment via key (index) expression
delete a  // global variable deletion expression
delete a.b  // property deletion expression
delete a[b]  // property deletion via key (index) expression
a(b); a(b, c)  // function call expression with arguments
a.b(c); a.b(c, d)  // method call expression with arguments
new A; new A(b, c)  // object (class) instantiation expression
super()  // extended class instantiation expression
import(a)  // module import expression
await p  // await promise result expression
yield; yield a  // generator yield expression
a << b  // bit shift left expression
a >> b  // bit shift right expression
a >>> b  // bit shift right expression with sign drop
a & b  // bitwise AND expression
a | b  // bitwise OR expression
a ^ b  // bitwise XOR expression
~a  // bitwise NOT expression
a <<= b  // bit shift left reassignment expression 
a >>= b  // bit shift right reassignment expression
a &= b  // bitwise AND reassignment expression
a |= b  // bitwise OR reassignment expression
a ^= b;  // bitwise XOR reassignment expression
[...a]  // array creation expression with values from iterable
(
{...a}  // object creation expression with properties from object
)  
a(...b)  // function call expression with iterable arguments spread
a.b(...c);  // method call expression with iterable arguments spread
[a] = b; [a, b] = c;  // iterable destructuring expression
[,, a] = b;  // iterable destructuring expression, skipping elements in the beginning
[a,...b] = c  // iterable destructuring expression with rest of values collected in array
(
{a} = b, {a, b} = c  // object destructuring expression
)(
{a, ...b} = c  // object destructuring expression with rest of properties collected in object
)(
{a: b} = c  // object destructuring expression with differently named property/variable
)
[[a]] = b; [{a}] = b, {a: [b]} = c, {a: {b}} = c  // deep iterable/object destructuring expression


//* complex literals (more than one token) are also compound expressions:


`interpolated ${a} and ${b}`, `no interpolation`  // template string literals with or without interpolation
function f() {}; function f(a, b) {}  // classic function literal
(
function () {}, function (a, b) {}  // anonymous classic function literal
)
a => b; () => {}; (a, b) => {}; () => c  // arrow function literal
[a, b, c];  // array literal
(
{a: b, c: d}  // object literal
);
{a, b} // shorthand object literal (values provided by bindings with same names)
(
{m() {}}  // object literal with method definition (shorthand)
)  
function C() {}; function C(a, b) {}  // function constructor literal
class C {}; class C extends B {}  // class literal
class C {constructor() {}; m() {}; static s() {}; get g() {}; set t(v) {}; p = a }  // class literal with 
// ... optional constructor,methods, static methods, getters, setters and property initializers
async function f() {}; async () => {}  // async function literals (classic and arrow)
(
{async m() {}}, class C {async m() {}; static async s() {}}  // object/class literals with async method definitions
)(
function* g() {}, function* () {}  // generator function literals
)(
{*m() {}}, class C {*m() {}; static *s() {}}  // object/class literals with generator method definitions
)


//* statements:


//? statements are made with keywords:


var a = b;  // variable declaration statement
const a = b;  // constant declaration statement
let a = b;  // block scope variable declaration statement
function f() {}  // function declaration statement (if not in expression position)
class C {}  // class declaration statement (if not in expression position)
if (a) {}  // if statement
if (a) {} else {}; if (a) {} else if (b) {} else {}  // if-else statement of arbitrary complexity
switch (a) {}; switch (a) {case b: c; default: d}  // switch statements
while (a) {}  // while statement
do {} while (a)  // do-while statement
for (a; b; c) {}; for ( ; ; ) {}; for ( ; ; ); // classic for statements
for (let a of b) {}; for (a of b) {} // for-of statements
for (let a in b) {}; for (a in b) {} // for-in statements
break;  // break statement (only allowed in switch, for, while, do-while)
continue;  // continue statement (only allowed in for, while, do-while)
return;  // return statement (only allowed in function)
throw a;  // throw statement (only allowed in function)
try {} catch (a) {}; try {} catch {}; try {} finally {}; try {} catch {} finally {}  // try-catch-finally statements
import a from "b"; import * as a from "b"; import "b";  // import statements
import {a} from "b"; import {a as b} from "b";  // partial (named) import statement (without and with renaming)
export default a;  // default export statements
export {a}; export {a as b};  // named export statement (without and with renaming)
export const a = b; export let a = b; export function f() {};  // export statement with declarations
export * from "b";  // export all from module
export {a} from "b"; export {a as b} from "b";  // partial (named) export statement (without and with renaming)
