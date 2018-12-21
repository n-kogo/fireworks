import {Vector} from "../deps/Vector";
import {globals} from "../../../globals";
import {Firework} from "../deps/Firework";
import {Pattern} from "../deps/pattern";

export class Cluster extends Pattern {
  constructor() {
    super()
  }

  generate(p, parent) {
    var opt = {
      force: p.force || 780,
      nb: p.nb || 20
    };
    for (let i = 0; i < opt.nb; i++) {
      let v = new Vector(0, 0, {
        length: Math.random() * opt.force,
        angle: Math.random() * Math.PI * 2
        // angle: Math.PI * (i + 1) / 2
      });
      let f = new Firework(parent.stage, {
        pattern: 'bloom',
        particleNb: 25,
        particleForce: 750,
        colors: p.colors || [0xFFFF22, 0xFFAA11],
        radius: 4,
        lifeSpan: 0.33 + Math.random() / 10,
        launchVector: v,
        x: parent.container.x,
        y: parent.container.y,
        color: p.color,
        shape: p.shape,
      });
      globals.elements.push(f);
      globals.elements[globals.elements.length - 1].launch();
    }
  }

}