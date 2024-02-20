#  🧑‍🎓  Understanding Promises

In-depth exercises that will help to learn how Promises work in JavaScript.
_(exercises are in Typescript, however)_

## Using exercises
Here's the best way to use these exercises:

- Clone the repository
- Install dependencies (e.g., `pnpm i`)
- Navigate to the #1 exercise by clicking on the link below its title
- Read about the task
- Workout the task
- Only after you wrote the code for the exercises, open the collapsed "Exercise Checklist" section
  - See maybe you missed something > fine-tune your code
- Continue with the next exercise
- If the task isn't clear, submit an [Issue](../../issues/new) and I'll try to provide more details

## Exercises

### #1 Continue no matter what
[`src/continue-no-matter-what.ts`](./src/continue-no-matter-what.ts)
<details>
  <summary>Exercise Checklist</summary>

  - [ ] `.finally()`
  - [ ] `async/await` + `try/catch` + duplicate the `showSnackbar()` call

  Questions:
  - How to test this?
  - Are there any other ways how to solve this?
</details>

### #2 Continue after multiple
[`src/continue-after-multiple.ts`](./src/continue-after-multiple.ts)
<details>
  <summary>Exercise Checklist</summary>

- [ ] `Promise.all()` + `finally()`
  - [ ] `async/await`
- [ ] `allSettled()` + `then()`

Questions:
- How to test this?
- Are there any other ways how to solve this?
  - And with `async/await`?
</details>

### #3 Throw immediately
[`src/throw-immediately.ts`](./src/throw-immediately.ts)
<details>
  <summary>Exercise Checklist</summary>

- [ ] `Promise.reject()`
- [ ] `async/await` + `throw new Error()`

Questions:
- How to test this?
- Are there any other ways how to solve this?
</details>

### #4 Fallback to fabricate
[`src/fallback-to-fabricate.ts`](./src/fallback-to-fabricate.ts)
<details>
  <summary>Exercise Checklist</summary>

- [ ] `Promise.reject()`
- [ ] `async/await` + `throw new Error()`
- [ ] `then()` + `catch()`
- [ ] The fabricate mutation is protected (e.g., `as const`, `Readonly<T>`, factory)

Questions:
- How to test this?
- Are there any other ways how to solve this?
- How do we protect the fabricate from mutations?
</details>

### #5 Take first
[`src/take-first.ts`](./src/take-first.ts)
<details>
  <summary>Exercise Checklist</summary>

- [ ] `Promise.race()` + IF condition to retrieve by id or log right away (when one)

Questions:
- How to test this?
- Are there any other ways how to solve this?
</details>

### #6 Fail silently
[`src/fail-silently.ts`](./src/fail-silently.ts)
<details>
  <summary>Exercise Checklist</summary>

- [ ] Please explore what happens here
- [ ] Briefly explain what happens here. Any questions?
- [ ] The problem: Contact creation might throw, for example, when the receiver is unauthorized.
- [ ] How can we ensure success is displayed, no matter whether the contact creation succeeds or fails?
- [ ] Can we create a generic abstraction to handle this case and similar cases in the codebase when applicable?
- [ ] Feel free to ask questions
- [ ] Please think out loud while working on the exercise

Solutions:
_`async/await` + `allSettled()`_
```ts
async function safeAfterPayment<T>(
  action: Promise<T>, 
  getFallback = () => T,
): Promise<T> {
  const [{ value = getFallback() }] = await Promise.allSettled[action];

  return value;
}
```
_`allSettled()` + `then()`_
```ts
function safeAfterPayment<T>(
  action: Promise<T>, 
  getFallback = () => T,
): Promise<T> {
  return Promise.allSettled[action]
    .then(([{ value = getFallback() }]) => value);
}
```
_`try/catch` + `Promise.resolve()`_
```ts
async function safeAfterPayment<T>(
  action: Promise<T>, 
  getFallback = () => T,
): Promise<T> {
  try {
    const result = await Promise.resolve(action);
    
    return result;
  } catch(e) {
    return getFallback();
  }
}
```
</details>

### #7 Abort when too long
https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort

### #8 Cancel promised
https://leanylabs.com/blog/cancel-promise-abortcontroller/

### #9 Extend Promise with abort feature
https://gist.github.com/andrewcourtice/ef1b8f14935b409cfe94901558ba5594
