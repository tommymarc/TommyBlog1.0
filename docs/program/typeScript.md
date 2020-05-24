---

title: typeScript

meta:
  - name: description
    content: TypeScript Documentation
  - name: keywords
    content: js，TypeScript，Documentation

created: 2020/04/23

updated: 2020/04/23
 
tags:
  - js
  - TypeScript
  - Documentation
 
---

# Documentation

Getting started with TypeScript

## Start Learning

### TypeScript in 5 minutes 

Let's get started by building a simple web application with TypeScript.

> Installing TypeScript

Thear are two main ways to get the TypeScript tools:

- Via npm(the Node.js package manager)
- Byinstalling TypeScript's Visual Studio plugins

Visual Studio 2017 and Visual Studio 2015 Update 3 include TypeScript by default. If you didn;t install TypeScript with Visual Studio, you can still [download it](https://www.typescriptlang.org/#download-links).

For NPM users :

```cmd 
npm install -g typescript
```

> Building your first TypeScript file

In your editor, type the following JavaScript code in `greeter.ts`:

```js
function greeter(person){
  return "Hello," + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

> Compiling your code

We userd a `.ts` extension, but this code is just JavaScript. You could have copy/pasted this straight out of an existing JavaScript app.

At the command line, run the TypeScript compiler:

```cmd 
tsc greeter.ts
```

The result will be a file `greeter.js` which contains the sanme JavaScript that you fed in. We're up and running using TypeScript in out JavaScript app! 

Now we can start taking advantage of some of the new tools TypeScript offers. Add a `: sting` type annotation to the 'person' function argument as shown here: 

```js
function greeter(person: string){
  return "Hello," + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
``` 


> Type annotations 

Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable. In this case, we intend the greeter function to be called with a single string parameter. We can try changing the call greeter to pass an array instead: 

```js
function greeter(person: string){
  return "Hello," + person;
}

let user = [0, 1, 2];

document.body.textContent = greeter(user);

Re-compiling, you will now see an error:

```cmd
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

Similarly, Try removing all the arguments to the greeter call. TypeScript will let you know that you have called this function with unexpected number of parameters. Inboth cases, TypeScript can offer static analysis based on both the structure of your code,and the type annotations you provide.

Notice that although there were errors, the `greeter.js` file is still created. You can use TypeScript even if there are errors in your code. But in this case, TypeScript is warning that your code will likely not run as expected.

> Interfaces

Let's develop our sample further. Here we use an interface that describes objects that have a firstName and lastName field . In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

```js
interface Person{
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lasteName: "User" };

document.body.textContent = greeter(user);
```

> Classes

Finally, let's extend the example one last time with classes. TypeScript supports new features in JavaScript, like support for class-bassed object-oriented programming.

Here we're going to create a `Student` class with a constructor and a few public fields. Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.

Also of note, the use of `public` on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.

```js
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string){
    this.fullName = firtName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```


Re-run `tsc greeter.js` and you will see the generated JavaScript is the sanme as the earlier code. Classes in TypeScript are just a shorthand for the sanme prototype-bassed OO that is frequently used in JavaScript.

> Running your TypeScript web app

Now type the following in `greeter.html`:

```html
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```

Open `greeter.html` in the browser to run your first simple TypeScript web application!

Optional: Open `greeter.ts` in Visual Studio, or copy the code into the TypeScript playground. You can hover over identifiers to see their types. Notice that in some cases these types are inferred automatically for you. Re-typethe last line,and see completion lists and parameter help based on the types of the DOM elements. Put your cursor on the reference to the greeter function, and hit F12 to ho to its definition. Notice, too, that you can right-click on a symbol and use refactoring to rename it.

The type information provided works together with the tools to work with JavaScript at application sacle. For more examples of what's possible in TypeScript, see the Samples section of the website.


![flexbox](./images/typeScript1.png)
