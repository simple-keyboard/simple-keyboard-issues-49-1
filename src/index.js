import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./index.css";

let keyboard = new Keyboard({
  layout: {
    default: ["1 2 3", "4 5 6", "7 8 9", "{//} 0 {//}", "{bksp}"]
  },
  theme: "hg-theme-default hg-layout-numeric numeric-theme",
  preventMouseDownDefault: true,
  //disableCaretPositioning: false,
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  debug: true
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
