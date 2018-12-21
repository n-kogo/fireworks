export class Vector {
  constructor(x, y, force){
    if(!force){
      this.x = x ||  0;
      this.y = y || 0;
      this.update();
    }
    if(force){
      this.velocity = force.length;
      this.angle = force.angle;
      this.angleUpdate();
    }

  }
  add(x, y){
    this.x += x;
    this.y += y;
  }
  set(x, y){
    this.x = x;
    this.y = y;
    this.update();
  }
  join(vector){
    this.x += vector.x;
    this.y += vector.y;
    this.update();
  }
  multiply(nb){
    this.x *= nb;
    this.y *= nb;
    this.update();
  }
  getSpeed(){
    return this.velocity;
  }
  update(){
    this.velocity = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    this.angle = Math.atan2(-this.y, this.x);
  }
  angleUpdate(){
    this.x = Math.cos(this.angle) * this.velocity;
    this.y = -Math.sin(this.angle) * this.velocity;
  }
}

