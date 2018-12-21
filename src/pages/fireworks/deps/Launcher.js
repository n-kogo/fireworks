import {Unit} from "./Unit";
import {Circle} from "../graphics/circle";
import * as PIXI from 'pixi.js';

/**
 * p : User data
 */
export class Launcher extends Unit {
    constructor(stage, p) {
      super(stage, p);
      this.p = p;
      this.lifeTime = 0;
      this.p.lifeSpan = 10;
      this.body = new Circle({
        radius: 6,
        color: p.color
      });

      this.name = new PIXI.Text(p.name,{fontFamily : 'Arial', fontSize: 15, fill : p.color, align : 'center'});
      this.name.y = 18;
      this.name.anchor.set(0.5, 0.5);
      this.physics.gravity = false;
      this.container.addChild(this.body);
      this.container.addChild(this.name);
      this.stage.addChild(this.container);
      console.log('new launcher', p);
    }

    update(deltaFrame){
      if (this.p.lifeSpan - this.lifeTime <= 0 && !this.exploded) {
        this.destroy();
      }
      this.container.alpha = ((this.p.lifeSpan - this.lifeTime) * 2) / this.p.lifeSpan;
      this.lifeTime += deltaFrame;
    }

}