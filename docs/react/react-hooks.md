---
title: "React Hooks"
slug: "/react-hooks"
description: React Hooks Lesson Material
keywords: [javascript, react.js, react hooks]
---

## Why

Up until now, we’ve created class components, handled state, passed props, and rendered ReactDOM elements to create applications. Now let’s talk about **React Hooks**.

Hooks cover the same knowledge you’ve been learning about React. The difference is, hooks provide an easier interface to working with props, state, and lifecycle methods.

Hooks allow you to reuse many of the components and logic you have created in your application. You can share components easily, creating more independence in your program.

With hooks, we are able to destructure our code into parts that are not hard to manage. We are no longer bound by lifecycle methods (`componentWillMount`, `componentDidMount`, and `componentWillUnmount`) that force us to split our code a certain way.

Now we can use React without classes. All in all, we can do everything with hooks that we learned to do with class components. Hooks are based on functions, rather than classes. Let’s learn more, shall we?

## What

### State Hook

So if we are not using class components, how do we utilize state with a function component?

The first hook we’ll learn is the **state hook**.

```jsx
function App() {
  const [greeting, setGreeting] = React.useState("Welcome to React!");

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{greeting}</h1>
      <hr />
      <div>
        <label htmlFor="greetingInput">Type Greeting:</label>
        <input
          type="text"
          id="greetingInput"
          name="greetingInput"
          onChange={(e) => setGreeting(e.target.value)}
        />
      </div>
    </main>
  );
}

export default App;
```

The **useState** React method is a **hook**. “Welcome to React!” is the initial string value we assign our ‘state’ **greeting**, that is preserved between re-renders.

The **setGreeting** method is a function that lets you update **greeting**. Above, we have an input element that calls **setGreeting** on each _change event_, thus setting the state each time the input key is filled. The functionality should look familiar to you.

### The Effect Hook

The **effect hook** focuses on performing side-’effects’ in our components. We don’t need to use three or more lifecycle methods anymore.

Effect Hooks allow you to pass a function to be called after the first render, and each time the component re-renders. Normally, you’d have to split (or most often duplicate) your code between **componentDidMount** and **componentDidUpdate**. The effect hook eliminates this inconvenience.

```jsx
React.useEffect(() => {
  console.log("App - Effect Hook");
});
```

The `useEffect` React hook takes in a function to be called each time the ReactDOM renders, including the first render.

Along with the other lifecycle methods, we may need to call a clean up function with **componentWillUnmount**. We can do this with the effect hook.

```jsx
React.useEffect(() => {
  console.log("App - Effect Hook");
  return function cleanUp() {
    console.log("App - Clean Up");
  };
});
```

We return a **function**? Yes, to add a clean up functionality for when the component unmounts, we can return a function from our **useEffect hook**.

Keep in mind that `useEffect` runs after each render. So in the case of our cleanup function, it will be called after each render. This means that we can provide cleanup functionality for each render before running the effects for the following render. We’ll explain this in more detail as we go.

## How

Let’s walk through React Hooks.

We’re going to walk through our React Lifecycle Methods exercise, but convert the project to React Hooks so that we can see a side-by-side comparison.

First, let’s change the class component to a react functional component:

From:

```jsx
class App extends Component {
    constructor(props) {
        super(props)
    }
    ...
}
```

To:

```jsx
function App(props) {}
```

Now let’s change the state with a react state hook:

From:

```jsx
constructor(props) {
    super(props);

    this.state = {
        text: "Welcome to React!",
        hasLoaded: false,
        today: new Date()
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
}
```

To:

```jsx
const [text, setText] = React.useState("Welcome to React!");
const [hasLoaded, setHasLoaded] = React.useState(false);
const [today, setToday] = React.useState(new Date());
```

Since we are no longer working with a class with methods, we need to declare our **handle** functions, as well as use the appropriate **useState** hooks.

From:

```jsx
handleInput(e) {
    this.setState({
        text: e.target.value,
    })
}

handleClick() {
    this.setState({
        hasLoaded: this.hasLoaded ? false : true,
    })
}
```

To:

```jsx
function handleInput(e) {
  setText(e.target.value);
}

function handleClick() {
  setHasLoaded(hasLoaded ? false : true);
}
```

Lastly, we need to replace our componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods with our **useEffect hook.**.

From:

```jsx
componentDidMount() {
    console.log("App - Mount");
    this.setState({
        hasLoaded: true,
    })
}

componentDidUpdate(prevState) {
    console.log("App - Update(prevState)", prevState)
}

componentWillUnmount() {
    console.log("App - Unmount");
}
```

To:

```jsx
React.useEffect(() => {
  console.log("App - Effect Hook");
  setHasLoaded(true);
  return function cleanUp() {
    console.log("App - Clean Up");
  };
});
```

If you followed along, pay close attention to the logs in the browser console. I’ve used several logging statements to help you understand when each hook is called in between renders.

**HELLO**

That’s to get your attention to this next piece. If you have wrapped your head around the concept of react hooks, you may have thought of this:

What is the danger of changing state inside of a react `useEffect` hook like we did above?

We know that a component re-renders elements to the ReactDOM when state is changed, but that means that we could, and probably will, create an infinite loop of changing state, calling an `useEffect` function to re-render or cleanup, and inside that effect changing state again.

The `useEffect` hook has us covered. You can pass an array of **_dependencies_** after the effect callback.

```jsx
React.useEffect(() => {
  console.log("App - Effect Hook");
  setHasLoaded(true);
  return function cleanUp() {
    console.log("App - Clean Up");
  };
}, []);
```

In this case, it’s an empty array. That’s fine. All it needs to do is hold the previous state.

Now, when we re-render, the `useEffect` can reference if any state values changed from the previous values. If the values are the same, then react will _skip_ the effect callback.

> NOTE: you can pass in a particular state value to be referenced, or leave the array blank, thus only executing the callback on the mounting phase.

## Takeaways

1. Functional components cannot inherently manage state
2. React _Hooks_ are functions
3. The `useState` hook returns an array of two values: _state_ and _function_ to update state
4. The `useEffect` hook takes in a callback function that contains the logic for the mounting, updating, and unmounting phases
