export class Triangle extends PIXI.Container {
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
    let triangleHalfway = p.width / 2;
    this.triangle = new PIXI.Graphics();
    this.addChild(this.triangle);
    this.triangle.beginFill(this.p.color, 1)
      .moveTo(p.width, 0)
      .lineTo(triangleHalfway, p.height)
      .lineTo(0, 0)
      .lineTo(triangleHalfway, 0)
      .endFill();
  }
}