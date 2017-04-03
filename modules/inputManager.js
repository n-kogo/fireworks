import {globals} from '../globals'

export class InputManager {
  constructor(){

  }
  init(){
    document.onkeydown =(e)=>{
      switch(e.which){
        case 37:
          globals.input.left = true;
          break;
        case 38:
          globals.input.up = true;
          break;
        case 39:
          globals.input.right = true;
          break;
        case 40:
          globals.input.down = true;
          break;
        case 90:
          globals.input.climb = true;
          break;
        case 83:
          globals.input.sink = true;
          break;
      }
    };

    document.onkeyup = (e)=>{
      switch(e.which){
        case 37:
          globals.input.left = false;
          break;
        case 38:
          globals.input.up = false;
          break;
        case 39:
          globals.input.right = false;
          break;
        case 40:
          globals.input.down = false;
          break;
        case 90:
          globals.input.climb = false;
          break;
        case 83:
          globals.input.sink = false;
          break;
      }
    };
  }
}