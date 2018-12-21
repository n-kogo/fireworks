import * as PIXI from "pixi.js";

export class Rectangle extends PIXI.Container {
  constructor(p) {
    p = p || {};
    super();
    this.p = {
      width: p.width || 10,
      height: p.height || 10,
      x: p.x || 0,
      y: p.y || 0,
      color: p.color || 0xFFFFFF
    };
    this.rectangle = new PIXI.Graphics();
    this.addChild(this.rectangle);
    this.rectangle.beginFill(this.p.color)
      .drawRect(0, 0, this.p.width, this.p.height)
      .endFill()
    this.x = this.p.x;
    this.y = this.p.y;
  }
}