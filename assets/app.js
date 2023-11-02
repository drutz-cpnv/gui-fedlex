/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/style.scss';
import { replace } from 'feather-icons'
import {Accordion} from "./module/accordion";
import {map} from "core-js/internals/array-iteration";

replace()


let accordions = [...document.querySelectorAll("[data-accordion]")].map(v => new Accordion(v, 'svg'))

let switches = [...document.querySelectorAll("[role=switch]")].map(v => {
    v.addEventListener('click', (e) => {
        v.classList.toggle('bg-red-600')
        v.classList.toggle('bg-gray-200')
        const indicator = v.querySelector('span[aria-hidden]')
        indicator.classList.toggle('translate-x-3.5')
        indicator.classList.toggle('translate-x-0')
    })
})