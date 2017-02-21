class PraiseButton {
  constructor(ele,num) {
    this.ele = $(ele);
    this.num = num;
  }
  clickAction() {
    this.ele.click(()=> {
      if (!this.num) {
          this.ele.next().show().text(++this.num);
      } else {
          this.ele.next().text(++this.num);
      }
    })
  }
}

class Thumb extends PraiseButton{
  constructor(ele,num) {
    super(ele,num);
  }
}
export default {
  Thumb
}
