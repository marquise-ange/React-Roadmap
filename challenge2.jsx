/*
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

//solution
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <h1>I am trying my best!</h1>
)