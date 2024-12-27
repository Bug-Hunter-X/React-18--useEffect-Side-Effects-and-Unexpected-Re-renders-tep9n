# React 18+ useEffect Side Effects and Unexpected Re-renders

This repository demonstrates a common issue in React 18 and later versions related to the `useEffect` hook and its behavior with side effects.

## The Problem

The `useEffect` hook, when used without a cleanup function, or with a poorly implemented cleanup function, can lead to unexpected behavior when the component re-renders.  This is especially true when the effect performs actions such as logging to the console, making API calls, or manipulating the DOM. The provided `bug.js` shows an example of such a problem. The `console.log` inside the `useEffect` will run excessively, not just when the count actually changes.

## The Solution

The solution involves careful consideration of when and how to use `useEffect`.  Optimizing when the effect runs can prevent unneeded executions.  Also, implementing a cleanup function will remove any lingering side effects from the previous render. The `bugSolution.js` provides a corrected version of the code.