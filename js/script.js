/*======
; TYPEWRITTER EFFECT
; Author: W.S. Toh
; Modified by: Karina Alvarez
*/

var tw = {
    container: "typewriterSub", // ID of typewriter container
    text: [ // Blocks of text to show
      "Wife",
      "Mother of four",
      "Roller-skater",
      "A full-stack developer"
  
    ],
    delay: 100,
    blockDelay: 800,
  
    timer: null, // Used to hold the timer
    pointer: 0, // text position
    block: 0, // block of text
    draw: function() {
      tw.pointer++;
      tw.container.innerHTML = tw.text[tw.block].substring(0, tw.pointer);
      if (tw.pointer < tw.text[tw.block].length) {
        tw.timer = setTimeout(tw.draw, tw.delay);
      }
  
      // End of block
      else {
        tw.block++;
        if (tw.text[tw.block] == undefined) {
          tw.block = 0;
        }
        tw.timer = setTimeout(tw.reset, tw.blockDelay);
      }
    },
    reset: function() {
      tw.pointer = 0;
      tw.container.innerHTML = "";
      tw.timer = setTimeout(tw.draw, tw.delay);
    }
  };
  
  window.addEventListener("load", function() {
    tw.container = document.getElementById(tw.container);
    tw.draw();
  });