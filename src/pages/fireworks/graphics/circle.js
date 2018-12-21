import * as PIXI from 'pixi.js';

export class Circle extends PIXI.Container {
  constructor(p) {
    p = p || {};
    super();
    this.p = {
      radius: p.radius || 5,
      x: p.x || 0,
      y: p.y || 0,
      color: p.color || 0xFFFFFF
    };
    this.circle = new PIXI.Graphics();
    this.addChild(this.circle);
    this.circle.beginFill(this.p.color)
      .drawCircle(0, 0, this.p.radius)
      .endFill();
    this.x = this.p.x;
    this.y = this.p.y;
  }
}