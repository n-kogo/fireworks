import {Pattern} from "../deps/pattern";
import {Vector} from "../deps/Vector";
import {Particle} from "../deps/Particle";
import {globals} from "../../../globals";

export class Shotgun extends Pattern {
  constructor() {
    super();
  }
  generate(params, parent){
    if(!params) params = {};
    super.generate(params, parent);
    var particleOpt = {
      force: 350,
      nb: 40 + Math.round(Math.random() * 80)
    };
    for(let i = 0; i < particleOpt.nb; i++) {
      let v = new Vector(0, 0, {
        length: Math.random() * particleOpt.force,
        angle: Math.random() * Math.PI * 2
        // angle: Math.PI * (i + 1) / 2
      });
      let p = new Particle(parent.stage, {
        x: parent.container.x,
        y: parent.container.y,
        color: params.colors[Math.floor(Math.random() * params.colors.length)],
        launchVector: v,
        shape: params.shape,
        lifeSpan: 1.2
      });
      globals.elements.push(p);
    }
  }
}