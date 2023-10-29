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

replace()


let accordions = [...document.querySelectorAll("[data-accordion]")].map(v => new Accordion(v, 'svg'))
