import {Vector} from "./Vector";
import {Unit} from "./Unit";
import {Circle} from "../graphics/circle";
import {globals} from "../../../globals";
import {CST} from "../const";
import {Rectangle} from "../graphics/rectangle";
import {Triangle} from "../graphics/triangle";

export class Particle extends Unit {
  constructor(stage, p) {
    p = p || {};
    super(stage, p);
    this.lifeTime = 0;
    this.p = {
      color: p.color || 0xFFFFFF,
      launchVector: p.launchVector || new Vector(0, 0),
      radius: p.radius || 2.2,
      behaviour: p.behaviour || 'fading',
      shape: p.shape || CST.SHAPES[2],
      lifeSpan: p.lifeSpan || 3.5,
    };
    this.v.join(this.p.launchVector);
    let radius = this.p.radius * (0.9 + Math.random() * 2 / 10);
    switch(this.p.shape) {
      case CST.SHAPES[0]:
        this.body = new Rectangle({
          width: this.p.radius * 2.4,
          height: radius * 2.4,
          color: this.p.color
        });
        this.body.rotation = Math.random() * Math.PI;
        break;
      case CST.SHAPES[1]:
        this.body = new Triangle({
          width: radius * 3,
          height: radius * 3,
          color: this.p.color
        });
        this.body.rotation = Math.random() * Math.PI;
        break;
      case CST.SHAPES[2]:
      default:
        this.body = new Circle({
          radius: radius,
          color: this.p.color
        });
        break;
    }
    this.container.addChild(this.body);
    this.container.x = globals.width / 2;
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
    if (this.lifeTime > this.p.lifeSpan) {
      this.destroy();
    }
  }
}