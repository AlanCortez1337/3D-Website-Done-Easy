import './style.css'
import { Application } from '@splinetool/runtime';

const heroCanvas = document.getElementById('heroRender');
const heroLoad = new Application(heroCanvas);
// replace with model url
heroLoad.load('https://prod.spline.design/W4B-zY9oge8eOo6m/scene.splinecode');

const aboutCanvas1 = document.getElementById('aboutRender1');
const aboutLoad1 = new Application(aboutCanvas1);
// replace with model url
aboutLoad1.load('https://prod.spline.design/W4B-zY9oge8eOo6m/scene.splinecode');

const aboutCanvas2 = document.getElementById('aboutRender2');
const aboutLoad2 = new Application(aboutCanvas2);
// replace with model url
aboutLoad2.load('https://prod.spline.design/W4B-zY9oge8eOo6m/scene.splinecode');