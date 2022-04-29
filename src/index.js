import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.js";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

document.addEventListener("DOMContentLoaded", function(event) {
    const element = document.createElement('h1')
    element.innerHTML = "Hello Worlds"
    document.body.appendChild(element)
})