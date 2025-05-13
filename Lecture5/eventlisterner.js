// The addEventListener() method attaches an event handler to the specified element.
// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
// You can add many event handlers to one element.
// You can add many event handlers of the same type to one element, i.e two "click" events.
// You can add event listeners to any DOM object not only HTML elements. i.e the window object.
// The addEventListener() method makes it easier to control how the event reacts to bubbling.
// When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
// You can easily remove an event listener by using the removeEventListener() method.

//! 1. What are Events?
//* Events are actions that happen in the browser.
//* Common events: clicking a button, hovering over a div, submitting a form, pressing a key, loading a page.

// 2. How to Handle Events

// Inline HTML (Not Recommended)
<button onclick="alert('Button clicked!')">Click me</button>
// Easy, but mixes HTML and JS.

// JavaScript Event Properties (Element.onclick)
const btn = document.getElementById('myBtn');
btn.onclick = function () {
    alert('Button clicked!');
};
// Better, but only one onclick can exist at a time.

// Best Practice: addEventListener()
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function () {
    alert('Button clicked!');
});
// You can add multiple listeners. Separates HTML and JS (clean code).

// 3. Common Event Types
// | Event        | Description                  |
// | ------------ | ----------------------------- |
// | `click`      | Mouse click                   |
// | `mouseover`  | Mouse over an element          |
// | `mouseout`   | Mouse leaves an element        |
// | `keydown`    | Key pressed down               |
// | `keyup`      | Key released                   |
// | `submit`     | Form submitted                 |
// | `load`       | Page fully loaded              |
// | `change`     | Input value changed (input/select) |

// 4. Event Object (event)
// Every event handler receives an event object with information about the event.
btn.addEventListener('click', function (event) {
    console.log(event);  // info about the click
});
// Useful event properties:
// event.target → Element that triggered the event
// event.type → Type of event (click, submit, etc.)

// 5. Remove Event Listeners
function handleClick() {
    alert('Clicked!');
    btn.removeEventListener('click', handleClick);
}
btn.addEventListener('click', handleClick);
// Useful when you want a listener to work only once or to optimize performance.

// 6. Event Delegation
// Instead of adding a listener to every child, add it to a common parent.
// Useful for dynamic content!
document.getElementById('parentDiv').addEventListener('click', function (event) {
    if (event.target.matches('.childClass')) {
        alert('Child clicked!');
    }
});
// More efficient for many child elements.

// Summary
// Use addEventListener() for clean, flexible code.
// Always understand the event object.
// Use event delegation for dynamic or many elements.

//! Summary
//* Use addEventListener() for clean, flexible code.
//* Always understand the event object.
//* Use event delegation for dynamic or many elements.

// Event Listener Syntax
element.addEventListener('event', callback);

// Most Used Event Types
// | Event Name   | Trigger Description              |
// | ------------ | -------------------------------- |
// | `click`      | User clicks an element           |
// | `dblclick`   | User double-clicks               |
// | `mouseover`  | Mouse enters element             |
// | `mouseout`   | Mouse leaves element             |
// | `keydown`    | Any key is pressed               |
// | `keyup`      | Key is released                  |
// | `submit`     | Form is submitted                |
// | `change`     | Input/Select value changes       |
// | `input`      | User types into a field          |
// | `load`       | Page or image fully loaded       |
// | `scroll`     | User scrolls the page            |

// Useful Event Object Properties
element.addEventListener('click', function (event) {
    console.log(event.target);  // The clicked element
    console.log(event.type);    // e.g., "click"
    console.log(event.key);     // Pressed key (in keydown/keyup)
});

// Remove Event Listener
function greet() {
    console.log("Hi!");
}
element.addEventListener("click", greet);
element.removeEventListener("click", greet);
//! removeEventListener() only works if the same function reference is used.

// One-Time Event
element.addEventListener('click', () => {
    console.log('Clicked once!');
}, { once: true });

// Event Delegation (Dynamic Elements)
document.body.addEventListener('click', function (e) {
    if (e.target.matches('.dynamic-button')) {
        alert('Dynamic button clicked!');
    }
});

// Prevent Default Behavior
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stops form from reloading page
});
