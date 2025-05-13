//! What is the DOM?

//* DOM stands for Document Object Model.
//* It's a programming interface for HTML and XML documents.
//* The DOM represents the document as a tree of nodes/elements, which can be manipulated using JavaScript.

//! The DOM Programming Interface

//* The HTML DOM can be accessed with JavaScript (and with other programming languages).
//* In the DOM, all HTML elements are defined as objects.
//* The programming interface is the properties and methods of each object.
//* A property is a value that you can get or set (like changing the content of an HTML element).
//* A method is an action you can do (like add or deleting an HTML element).

//? If the element is found, the method will return the element as an object (in element).
//? If the element is not found, element will contain null.

//! If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
//! This example returns a list of all <p> elements with class="intro".

//* const x = document.querySelectorAll("p.intro");

//! The following HTML objects (and object collections) are also accessible:

//* document.anchors
//* document.body
//* document.documentElement
//* document.embeds
//* document.forms
//* document.head
//* document.images
//* document.links
//* document.scripts
//* document.title

// Accessing Elements
document.getElementById("id")           // Returns the element with the specified ID
document.getElementsByClassName("class") // Returns a collection (HTMLCollection)
document.getElementsByTagName("tag")     // Returns a collection of elements
document.querySelector("selector")       // Returns the first matching element (CSS selector)
document.querySelectorAll("selector")    // Returns all matching elements (NodeList)

// Manipulating Content
element.textContent = "Hello"     // Changes only the text
element.innerHTML = "<b>Hello</b>" // Parses and renders HTML
element.innerText = "World"       // Similar to textContent (but considers styling/visibility)

// Changing Attributes
element.setAttribute("src", "image.jpg")
element.getAttribute("href")
element.removeAttribute("alt")

// Shortcut for some attributes:
element.id = "new-id"
element.className = "my-class"

// Styling Elements
element.style.color = "red"
element.style.backgroundColor = "black"
element.style.fontSize = "20px"

// Creating & Inserting Elements
let newDiv = document.createElement("div")
newDiv.textContent = "I am new"
document.body.appendChild(newDiv)           // Adds as last child
parent.insertBefore(newDiv, referenceNode)  // Insert before a specific node

// Removing Elements
element.remove()
parent.removeChild(child)

//! Intermediate Level
// 1. Event Listeners
element.addEventListener("click", function () {
    alert("Clicked!");
});
// Common events: click, dblclick, mouseover, mouseout, keydown, submit, etc.

// 2. Event Object
element.addEventListener("click", function (event) {
    console.log(event.target);  // Element that triggered the event
});

// 3. Modifying Classes
element.classList.add("my-class")
element.classList.remove("my-class")
element.classList.toggle("my-class")
element.classList.contains("my-class") // Returns true/false

// 4. Form Handling
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent page reload
    let name = document.querySelector("#name").value;
    console.log(name);
});

// 5. DOM Traversal
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling

//! Advanced Level
// 1. Event Delegation
document.querySelector("#parent").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        alert("Button clicked: " + e.target.textContent);
    }
});
// Use it to attach a single event handler to a parent instead of multiple children.

// 2. Creating Templates
let template = `
<div class="card">
    <h3>${title}</h3>
    <p>${desc}</p>
</div>
`;
container.innerHTML += template;

// 3. Custom Data Attributes
<div data-user-id="123"></div>
let userId = element.dataset.userId; // Access data-user-id

// 4. MutationObserver (Watch DOM changes)
let observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        console.log(mutation);
    });
});

observer.observe(targetNode, {
    childList: true,
    attributes: true,
    subtree: true
});

// 5. Shadow DOM (Encapsulation in Web Components)
let shadow = element.attachShadow({ mode: "open" });
shadow.innerHTML = `<style>:host { color: red; }</style><p>Hello</p>`;

//? 6. Performance Tips
// Use document.createDocumentFragment() to reduce reflows.
// Batch DOM reads/writes together.
// Use requestAnimationFrame() for visual updates.

//! DOM Collection
//* An HTMLCollection is NOT an array!
//* An HTMLCollection may look like an array, but it is not.
//* You can loop through the list and refer to the elements with a number (just like an array).
//* However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.

//! NodeList
// Not an Array!
// A NodeList may look like an array, but it is not.
// You can loop through a NodeList and refer to its nodes by index.
// But, you cannot use Array methods like push(), pop(), or join() on a NodeList.

//! The HTML DOM NodeList Object
//* A NodeList object is a list (collection) of nodes extracted from a document.
//* A NodeList object is almost the same as an HTMLCollection object.
//* Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().
//* All browsers return a NodeList object for the property childNodes. 
//* Most browsers return a NodeList object for the method querySelectorAll().
//* The following code selects all <p> nodes in a document:

//? The Difference Between an HTMLCollection and a NodeList

// A NodeList and an HTMLcollection is very much the same thing.
// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
// Both have a length property that returns the number of elements in the list (collection).
// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.
// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
// The querySelectorAll() method returns a static NodeList.
// The childNodes property returns a live NodeList.

