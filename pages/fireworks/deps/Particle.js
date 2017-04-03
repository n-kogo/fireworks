import {Vector} from "./Vector";
import {Unit} from "./Unit";
import {Circle} from "../graphics/circle";
import {globals} from "../../../globals";


export class Particle extends Unit {
  constructor(stage, p){
    p = p || {};
    super(stage, p);
    this.lifeTime = 0;
    this.p = {
      color: p.color || 0xFFFFFF,
      launchVector: p.launchVector || new Vector(0, 0),
      radius: p.radius || 2.2,
      behaviour: p.behaviour || 'fading',
      lifeSpan: p.lifeSpan || 3.5
    };
    this.v.join(this.p.launchVector);
    this.body = new Circle({
      radius: this.p.radius * (0.9 + Math.random() * 2/10),
      color: this.p.color
    });
    this.container.addChild(this.body);
    this.container.x = globals.width/2;
    this.container.y = globals.height - 30;
    this.stage.addChild(this.container);
  }

  update(delta){
    let res = 14 * Math.pow(this.v.velocity, 2) * delta / 1000;
    let resV = new Vector(null, null, {
      length: res,
      angle: this.v.angle + Math.PI
    });
    this.v.join(resV);
    this.container.alpha = 1 - (this.lifeTime / this.p.lifeSpan);
    this.lifeTime += delta;
    if(this.lifeTime > this.p.lifeSpan){
      this.destroy();
    }
  }
}