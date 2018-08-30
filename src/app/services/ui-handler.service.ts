import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiHandlerService {

  constructor() { }

  toggleSelectbox(event, efDom) {
    efDom.querySelectorAll('.select_area').forEach((elem) => {
      if(elem  === event.target.parentNode.parentNode) {
        elem.classList.toggle('on');
      }else {
        elem.classList.remove('on');
      }
    });
  }

  //selectbox의 option 선택 리스너≈
  choiceSelectbox(event, self) {
    let selfRef = self;
    let target = event.target;
    console.log(target);
    target.parentNode.parentNode.childNodes.forEach((node) => {
      if(node.classList){
        node.classList.remove('on');
      }
    });
    target.parentNode.classList.add('on');
    selfRef[target.parentNode.parentNode.dataset.inputName] = target.innerHTML;
  }
}
