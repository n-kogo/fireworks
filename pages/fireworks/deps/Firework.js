import {Unit} from "./Unit";
import {activatePattern} from "../patterns/index";
import {Vector} from "./Vector";
import * as PIXI from 'pixi.js';
import {globals} from "../../../globals";
import {Circle} from "../graphics/circle";
import {Trail} from "../graphics/trail";


export class Firework extends Unit{
  constructor(stage, p){
    p = p || {};
    console.log(p);
    super(stage, p);
    this.lifeTime = 0;
    this.p = {
      colors: p.colors || [0xFFAA33, 0xFF55FF, 0xFC7733],
      lifeSpan: p.lifeSpan || 3 + Math.random(),
      isLaunched: false,
      radius: p.radius || 8,
      x: p.x || globals.width /2,
      y: p.y || globals.height + 30,
      particleNb: p.particleNb || 200,
      particleForce: p.particleForce || 750,
      color: p.color || 0xFFFFFF,
      pattern: p.pattern || 'bloom',
      launchVector: p.launchVector || new Vector(75 - Math.random() * 150, -350 + Math.random() * 20)
      // launchVector: p.launchVector || new Vector(500, -40)
    };
    this.body = new Circle({
      radius: this.p.radius,
      color: this.p.color
    });
    this.trail = new Trail({
      color: 0xCCCCCC,
      radius: this.p.radius * .7,
    });
    this.container.addChild(this.trail);
    this.container.addChild(this.body);
    this.setX(this.p.x);
    this.setY(this.p.y);
    this.stage.addChild(this.container);
  }
  update(deltaFrame){
    if(this.p.lifeSpan - this.lifeTime <= 0 && !this.exploded){
      this.activate();
    }
    this.trail.update(this.x, this.y);
    if(this.p.isLaunched){
      this.lifeTime += deltaFrame;
    }
  }
  launch(){
    this.p.isLaunched = true;
    this.v = this.p.launchVector;
  }
  activate(){
    if(!this.exploded){
      this.exploded = true;
      activatePattern(this.p.pattern, this, {
        nb: this.p.particleNb,
        force: this.p.particleForce
      });
    }
    this.destroy()

  }
}