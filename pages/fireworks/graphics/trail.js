import * as PIXI from 'pixi.js';
import {Circle} from "./circle";

export class Trail extends PIXI.Container {
  constructor(p){
    p = p || {};
    super();
    this.p = {
      color: p.color || 0xFFFFFF,
      nb: p.nb || 20,
      radius: p.radius || 6
    };
    this.positions = [];
    for(let i=0; i < this.p.nb; i++){
      this.addChild(new Circle({
        radius: this.p.radius * (this.p.nb - i) / this.p.nb,
        color: this.p.color
      }));
      this.children[i].alpha = -0.1 + (this.p.nb - i) / this.p.nb;
    }
  }
  update(x, y){
    this.positions.unshift({x: x, y: y});
    if(this.positions.length > this.p.nb) this.positions.length = this.p.nb;
    this.positions.forEach((pos,idx)=>{
      if(idx > 0){
        this.children[idx].x = pos.x - x;
        this.children[idx].y = pos.y - y;
      }
    });
  }

}