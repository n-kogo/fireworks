import * as PIXI from 'pixi.js'
import {globals} from './globals'
import {FireworksPage} from "./pages/fireworks/fireworks.page";
import {InputManager} from "./modules/inputManager";

globals.width = window.innerWidth;
globals.height = window.innerHeight;

window.FireworkManager = class FireworkManager {
  constructor() {
    this.currentPage = null;
    this.app = null;
    // The stage is the root container that will hold everything in our scene
    this.stage = new PIXI.Container();
    this.frame = performance.now();
    this.deltaFrame = 0;
    this.inputManager = new InputManager();
    this.inputManager.init();
  }

  init(bloc){
    if(!bloc) bloc = document.body;
    this.app = PIXI.autoDetectRenderer(globals.width, globals.height, {antialias: true, transparent: true});
    // Add the render view object into the page
    bloc.appendChild(this.app.view);
    this.changePage(FireworksPage);

    this.animate();
  }
  animate() {
    this.deltaFrame = performance.now() - this.frame;
    this.frame = performance.now();
    this.currentPage.render(this.deltaFrame / 1000, this.frame);
    this.app.render(this.stage);
    window.renderTime = performance.now() - this.frame;
    requestAnimationFrame(this.animate.bind(this));
  }

  getCurrentPage() {
    return this.currentPage;
  }

  changePage(page) {
    this.currentPage = new page(this.stage);
    this.currentPage.init();
  }
};
