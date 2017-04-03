import {Particle} from "../deps/Particle";
import {Vector} from "../deps/Vector";
import {globals} from "../../../globals";
import {Pattern} from "../deps/pattern";

export class Bloom extends Pattern{
  constructor(){
    super();
  }
  generate(p, parent){
    super.generate(p, parent);

    var opt = {
      force: p.force || 750,
      nb: p.nb || 190 + Math.random() * 100
      // nb: 1
    };
    for(let i =0; i < opt.nb; i++){
      let v =  new Vector(0, 0, {
        length: Math.random() * opt.force,
        angle : Math.random() * Math.PI * 2
        // angle: Math.PI * (i + 1) / 2
      });
      let p = new Particle(parent.stage, {
        x: parent.container.x,
        y: parent.container.y,
        color: parent.p.colors[Math.floor(Math.random() * parent.p.colors.length)],
        launchVector: v
      });
      globals.elements.push(p);
    }
  }

}