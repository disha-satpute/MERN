# React -

React is a popular JavaScript library for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, efficiently updating and rendering them when data changes.

❁ The most Important concept is **React Router** :

React Router is a popular library for handling routing in React applications. It enables navigation between different components or pages within a single-page application (SPA) without requiring a full page reload.

- Key Concepts of React Router:

Routes :
Define the mapping between URL paths and the components that should be rendered when those paths are visited.

BrowserRouter :
A component that wraps your application and enables the use of the Router API. It keeps your UI in sync with the URL.

Route : 
A component that renders a specific component based on the URL path.

Link : 
A component used to create navigation links, allowing users to navigate between different routes without reloading the page.

Switch : 
A component that renders the first matching <Route> from top to bottom. It ensures that only one route is rendered at a time.

Basic Example of React Router:

Let's create a simple React application with three pages: Home, About, and Contact.

1. Install React Router:

First, you need to install react-router-dom:
```bash
npm install react-router-dom
```

2. Set Up Routing:

Here's how you can set up routing in your React application:
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Home Component
function Home() {
  return <h2>Home Page</h2>;
}

// About Component
function About() {
  return <h2>About Page</h2>;
}

// Contact Component
function Contact() {
  return <h2>Contact Page</h2>;
}

// App Component
function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
              <Link to="/">Home</Link> |
              <Link to="/about">About</Link> |
              <Link to="/contact">Contact</Link> |
        </nav>

        {/* Route Definitions */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```
Explanation:

- <BrowserRouter> (aliased as <Router> in the example): Wraps the entire application, providing the routing context to all child components.
- <Link>: Creates a navigation link. Clicking it changes the URL without reloading the page.
- <Switch>: Ensures that only one route is rendered at a time by rendering the first matching route.
- <Route>: Defines the path-to-component mapping. When the path matches the current URL, the specified component is rendered.
- The exact prop in the home route (<Route path="/" exact component={Home} />) ensures that the Home component only renders when the path is exactly /. Without exact, /about would also match / because it starts with /.

3. Usage:

When you run this application:

- Visiting http://localhost:3000/ will show the Home Page.
- Visiting http://localhost:3000/about will show the About Page.
- Visiting http://localhost:3000/contact will show the Contact Page.

The links created with <Link> components allow users to navigate between these pages without triggering a full page reload.

<hr/>

Here are Some the basic concepts in React:

## Components :

The building blocks of a React application. Components are reusable pieces of UI, defined as JavaScript functions or classes that   return React elements (typically JSX).

Example:

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}

export default Welcome;
```
This is a simple functional component that returns a greeting.


## JSX (JavaScript XML) : 

A syntax extension for JavaScript that looks similar to HTML. JSX is used to describe what the UI should look like, making it easier to write and understand.

Example:

```jsx
function Greeting() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

JSX allows you to embed JavaScript expressions inside HTML-like syntax.

## Props (Properties) :

 Props are read-only inputs to a component. They allow data to be passed from a parent component to a child component.

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


## State :

State is a way to store and manage data that can change over time within a component. Unlike props, state is managed within the component and can be updated using setState or the useState hook.

Example:

```jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

The useState hook manages the count state, which can be updated with setCount.


## Hooks : 

Special functions in React (e.g., useState, useEffect) that allow you to use state and other React features in functional components. Hooks make it possible to manage component state and lifecycle without needing class components.

Example:

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
```
The useEffect hook is used to handle side effects, like setting up and cleaning up timers.


## Virtual DOM : 

A lightweight copy of the actual DOM that React uses to optimize rendering. React updates the virtual DOM first and then compares it with the real DOM to determine the most efficient way to update the UI.

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
React uses the virtual DOM to efficiently update the real DOM only where necessary when the count state changes.


## Event Handling :

React uses camelCase syntax for event handlers (e.g., onClick, onChange) and allows you to handle events in a consistent way across different browsers.

Example :

```jsx
function ClickButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default ClickButton;
```

React uses camelCase syntax (onClick) for event handling, and you can define event handler functions like handleClick.


## Conditional Rendering:

React allows you to render different elements or components based on certain conditions, typically using JavaScript expressions like ternary operators or logical &&.

Example :
```jsx
function UserGreeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}

export default UserGreeting;
```
Conditional rendering is handled with JavaScript expressions, such as ternary operators.


## Lists and Keys:

When rendering lists of elements, React requires a key prop to uniquely identify each element in the list. This helps React efficiently update and re-render list items.

Example:
```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}

export default NumberList;
```
When rendering lists, a key prop is necessary for each item to help React identify which items have changed.

