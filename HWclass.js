class Button {
  constructor(color, type, widht, height) {
    this.color = color;
    this.type = type;
    this.width = widht;
    this.height = height;
  }
  PressOnClick() {
    console.log(`onClick ${this.type}`);
  }
}
function testButton() {
  let myNewButton = new Button("green", "button", "100", "50");
  console.log(myNewButton);
}

testButton();
