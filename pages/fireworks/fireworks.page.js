
import {Page} from "../../class/Page";
import {Firework} from "./deps/Firework";
import {Vector} from "./deps/Vector";
import {globals} from "../../globals";
import {CST} from "./const";


export class FireworksPage extends Page {
  constructor(stage){
    super(stage);
    globals.elements = [];
  }
  init(){
    this.launchFireWork();
    document.onclick = (e)=>{
      this.launchFireWork()
    }
  }
  render(delta, frame){
    delta = delta || 0;
    globals.elements.forEach((element)=>{
      this.gravityVector = new Vector(0 , 100);
      this.gravityVector.multiply(delta);
      element.applyVector(this.gravityVector, delta);
      element.update(delta);

    })
  }
  launchFireWork(){
    let defaults = {
      'bloom': {
        pattern: 'bloom',
        particleNb: 200,
        particleForce: 720,
        radius: 6,
        lifeSpan: 2.3,
        color: 0xFFFFFF,
        launchVector: new Vector(75 - Math.random() * 150, -290 + Math.random() * 20)
      },
      'cluster': {
        pattern: 'cluster',
        particleNb: 30,
        particleForce: 400,
        color: 0xFF6611,
        radius: 8,
        lifeSpan: 3.8,
        launchVector: new Vector(75 - Math.random() * 150, -340 + Math.random() * 20)
      },
      'galaxy': {
        pattern: 'galaxy',
        particleNb: 180,
        particleForce: 800,
        color: 0x2288FF,
        colors: [0xFFFF00, 0x0011FF],
        radius: 7,
        lifeSpan: 3.1,
        launchVector: new Vector(75 - Math.random() * 150, -320 + Math.random() * 20)
      }
    };
    let pattern = CST.PATTERNS[Math.floor(Math.random()* (CST.PATTERNS.length))];
    globals.elements.push(new Firework(this.stage, defaults[pattern]));
    globals.elements[globals.elements.length - 1].launch();
  }
}