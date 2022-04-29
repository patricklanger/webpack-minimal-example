import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.js";

// Create our react root
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Add a h1 to the html file with common JS
document.addEventListener("DOMContentLoaded", function(event) {
    const element = document.createElement('h1')
    element.innerHTML = "And I am vanillaJS!"
    document.body.appendChild(element)
})
