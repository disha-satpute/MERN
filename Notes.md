# React -

React is a popular JavaScript library for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, efficiently updating and rendering them when data changes.

Here are the basic concepts in React:

- Components : The building blocks of a React application. Components are reusable pieces of UI, defined as JavaScript functions or classes that   return React elements (typically JSX).

Example:

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}

export default Welcome;
```
This is a simple functional component that returns a greeting.
<hr/>

- JSX (JavaScript XML) : A syntax extension for JavaScript that looks similar to HTML. JSX is used to describe what the UI should look like, making it easier to write and understand.

Example:

```jsx
function Greeting() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

JSX allows you to embed JavaScript expressions inside HTML-like syntax.
<hr/>

- Props (Properties) : Props are read-only inputs to a component. They allow data to be passed from a parent component to a child component.

Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}

export default App;
```
Props are used to pass data from a parent component (App) to a child component (Welcome).
<hr/>

