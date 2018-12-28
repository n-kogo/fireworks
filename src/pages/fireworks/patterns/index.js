import {Bloom} from "./bloom";
import {Cluster} from "./cluster";
import {Galaxy} from "./galaxy";
import {Shotgun} from "./shotgun";

let bloom = new Bloom();
let cluster = new Cluster();
let galaxy = new Galaxy();
let shotgun = new Shotgun();
export function activatePattern(pattern, parent, p){
  p = p || {};
  switch (pattern){
    case 'bloom':
      bloom.generate(p, parent);
      break;
    case 'cluster':
      cluster.generate(p, parent);
      break;
    case 'galaxy':
      galaxy.generate(p, parent);
      break;
    case 'shotgun':
      shotgun.generate(p, parent);
      break;

  }
}