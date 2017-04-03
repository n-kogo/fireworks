import * as PIXI from 'pixi.js'
import {globals} from './globals'
import {FireworksPage} from "./pages/fireworks/fireworks.page";
import {InputManager} from "./modules/inputManager";

globals.width = window.innerWidth;
globals.height = window.innerHeight;
let app = PIXI.autoDetectRenderer(globals.width, globals.height, {antialias: true});
// Add the render view object into the page
document.body.appendChild(app.view);
// The stage is the root container that will hold everything in our scene
let stage = new PIXI.Container();

var currentPage;
let changePage = (page)=>{
  currentPage = new page(stage);
  currentPage.init();
};

changePage(FireworksPage);
// add it the stage so we see it on our screens..
let frame = performance.now();
let deltaFrame = 0;
let inputManager = new InputManager();
inputManager.init();
function animate(){
  deltaFrame = performance.now() - frame;
  frame = performance.now();
  currentPage.render(deltaFrame / 1000, frame);
  app.render(stage);
  window.renderTime = performance.now() - frame;
  requestAnimationFrame(animate);
}

animate();