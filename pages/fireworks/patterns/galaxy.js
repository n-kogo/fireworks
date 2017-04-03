import {Particle} from "../deps/Particle";
import {Vector} from "../deps/Vector";
import {globals} from "../../../globals";
import {Pattern} from "../deps/pattern";
export class Galaxy extends Pattern{
  constructor(){super()}
  generate(p, parent){
    super.generate(p, parent);
    var opt = {
      force: p.force || 750,
      nb: p.nb || 120
    };
    // let circleAngle = - Math.PI/ 6 + Math.random() * Math.PI/3;
    let circleAngle = Math.PI/3;
    for(let i = 0; i < opt.nb; i++){
      if(i < opt.nb < 5){
        let r = Math.random();
        let seed = r * Math.PI * 2 - Math.PI;

        let v = new Vector(0,0,{
          length: 300,
          angle: seed
        });
        v.y *= .5 +  .5 * Math.sin(v.angle + Math.PI);
        if(v.angle > 0){
          console.log(.5 +  .5 * Math.sin(v.angle + Math.PI).toFixed(2), (v.angle/ Math.PI).toFixed(2) + 'PI');
          console.log(v.y);
        }
        // v.x *= .5 +  .5 * Math.cos(v.angle + circleAngle);
        let p = new Particle(parent.stage, {
          x: parent.container.x,
          y: parent.container.y,
          color: parent.p.colors[0],
          launchVector: v
        });
        globals.elements.push(p);
      }
    }
  }

}