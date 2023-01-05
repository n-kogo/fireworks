import { Page } from "../../class/Page";
import { Firework } from "./deps/Firework";
import { Vector } from "./deps/Vector";
import { globals } from "../../globals";
import { CST } from "./const";
import { copyObject, rgbArrayToHex } from "../../helpers/util";
import { Launcher } from "./deps/Launcher";

export const villageColors = [[232, 132, 0], [17, 171, 166], [159, 167, 10], [227, 55, 13]];
export const villages = ['sulimo', 'ulmo', 'wilwar', 'anar'];

export class FireworksPage extends Page {
  constructor(stage) {
    super(stage);
    globals.elements = [];
  }

  init() {
    this.defaults = {
      'bloom': {
        pattern: 'bloom',
        particleNb: 200,
        particleForce: 730,
        radius: 4.5,
        lifeSpan: 2.3,
        color: 0xFFFFFF,
        shape: 'circle',
        number: 1
      },
      'cluster': {
        pattern: 'cluster',
        particleNb: 30,
        particleForce: 370,
        color: 0xFF6611,
        radius: 8,
        lifeSpan: 3.8,
        shape: 'circle',
        number: 1
      },
      'galaxy': {
        pattern: 'galaxy',
        particleNb: 180,
        particleForce: 800,
        color: 0x2288FF,
        colors: [0xFFFF00, 0x0011FF],
        radius: 5,
        shape: 'circle',
        lifeSpan: 3.1,
        number: 1
      },
      'shotgun': {
        pattern: 'shotgun',
        radius: 3,
        shape: 'circle',
        number: 8,
        lifeSpan: 1.6
      }
    };
    // document.onclick = (e)=>{
    //   this.launchFireWork()
    // }
  }

  render(delta, frame) {
    delta = delta || 0;
    globals.elements.forEach((element) => {
      if (element.physics.gravity) {
        this.gravityVector = new Vector(0, 100);
        this.gravityVector.multiply(delta);
        element.applyVector(this.gravityVector, delta);
      }
      element.update(delta);
    })
  }

  /**
   *
   * @param options : {
   *   pattern: enum,
   *   shape: enum,
   *   color: [int, int, int]
   *   launchForce: int,
   *   user: user sent from backend
   * }
   */
  launchFirework(options) {
    if (!options) options = {};
    let pattern = options.pattern || CST.PATTERNS[Math.floor(Math.random() * (CST.PATTERNS.length))];
    let params = copyObject(this.defaults[pattern]);
    if (options.shape) params.shape = options.shape;
    if (options.colors) params.colors = rgbArrayToHex(options.colors);
    params.x = options.x ? options.x : globals.width / 4 + Math.random() * globals.width / 2;
    params.y = options.y ? options.y : globals.height / 1.05 - 80;
    for (let i = 0; i < params.number; i++) {
      globals.elements.push(new Firework(this.stage, params));
      globals.elements[globals.elements.length - 1].launch();
    }
    if (options.user) {
      this.addLauncher(options.user, params.x, params.y);
    }
  }
  addLauncher(user, x, y) {
    let existingLauncherIndex = globals.elements.findIndex(element => element.p.ID === user.ID);
    if (existingLauncherIndex >= 0) {
      globals.elements[existingLauncherIndex].destroy();
    }
    let p = {
      color: rgbArrayToHex(villageColors[villages.indexOf(user.village)]),
      village: user.village.meta_value,
      name: user.display_name,
      x: x,
      ID: user.ID,
      y: y
    };
    globals.elements.push(new Launcher(this.stage, p));
  }
}