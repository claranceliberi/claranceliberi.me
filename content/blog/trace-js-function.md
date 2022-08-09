---
title: 'Trace Js Function'
description: 'Trace where the function was called from, in javascript'
date: '1 Oct 2020'
duration: 5
---

Hello, Today we are going to remind ourselves how we can trace a function so that we can know where it was called from. If you have not ever messed up while trying to find where a function was called from you can't understand how important this post is, but if you have messed up and struggled to know and find where exactly the function is called from and then here is the solution

so we already know some debugging functions in javascript like `console.log()`
but there is time they never help to such situation, that's when you find that the real  thing to use is
```
console.trace()
```
so here is the step by step of doing the things

I am using CodePen for writing these simple codes

let us suppose we have two functions `add` and `consoleAdd`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/wvl9xpa32be19fnbl48e.png)


and I think you have noticed that in `add()` function we have something called `console.trace()` so at this time we want to ensure and know where exactly `add()` function was called from.

so to know this we will go in `console ` in browser dev tools, as where every console functions are found, so what you will see is the list of where the function is going called and there parents function
but the exact function will be the first one as you see right here

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ls1z1xd8yxhhsouaa0z2.png)

it thinks you already see that we have `add` in the first place so that's where our `console.trace()` was called from , but remember our aim is not knowing where `console.trace()` was called from but where `add()` was called from 

simple console.trace() shows every function call from where `console.trace()` is called to the last one
I think you can see it clear in the above image that 
1. `console.trace()` was called in `add()`
2. `add()` was called from `consoleAdd()`
3. and finally `consoleAdd()` was called by `anonymous` as it was called by browser while running the code

simple those number on the end of the name of a function are the number of the line where the function is returned or if the function did not return anything they take the next line to the last function curry brace `}`

and that **5** you saw, is the output of `add(2,3)`

I hope this post help, Thank you dev community

