import {Vector} from "./Vector";
import * as PIXI from 'pixi.js';
import {globals} from '../../../globals'

let id = 0;

export class Unit {
  constructor(stage, p){
    p = p || {};
    this.lifeTime = 0;
    this.id = id++;
    this.stage = stage;
    this.x = p.x || 0;
    this.y = p.y || 0;
    this.container = new PIXI.Container();
    this.v = new Vector();
    this.container = new PIXI.Container();
  }
  applyVector(vector, delta){
    this.v.join(vector);
    this.setX(this. x + this.v.x * delta);
    this.setY(this.y + this.v.y * delta);
  }

  setX(x){
    this.x = x;
    this.container.x = x;
  }
  setY(y){
    this.y = y;
    this.container.y = y;
  }
  setPos(pos){
    this.setX(pos.x);
    this.setY(pos.y);
  }
  destroy(){
    let idx = globals.elements.findIndex((elt)=>{
      return elt.id === this.id
    });
    this.stage.removeChild(this.container);
    globals.elements.splice(idx, 1);
  }
}