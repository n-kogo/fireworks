import * as PIXI from 'pixi.js'
/*
  x: float
  y: float
  radius: float
  fill: color
  stage: PIXI.stage
 */
const drawCircle = function(c, stage){
  let circle = new PIXI.Graphics()
    .beginFill(c.fill || 0xFF0000);

  if(c.stroke)
    circle.lineStyle(1, 0x224466);
  circle.drawCircle(0, 0, c.radius)
    .endFill();
  circle.x = c.x;
  circle.y = c.y;
  stage.addChild(circle);
  return circle
};

export {drawCircle}