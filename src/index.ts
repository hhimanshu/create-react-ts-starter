import * as _ from 'lodash';
import './styles.css';
import printMe from "./print";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement("button")

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    btn.innerHTML = "Click and check console"
    btn.onclick = printMe
    element.appendChild(btn)

    return element;
}
document.body.appendChild(component());