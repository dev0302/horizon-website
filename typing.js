// class Typewriter {
//     constructor(element, text, options = {}) {
//         this.element = element;
//         this.text = text;
//         this.speed = options.speed || 100;
//         this.deleteSpeed = options.deleteSpeed || 50;
//         this.pauseTime = options.pauseTime || 2000;
//         this.timeout = null;
//     }

//     type() {
//         let i = 0;
//         const type = () => {
//             if (i < this.text.length) {
//                 this.element.textContent = this.text.substring(0, i + 1);
//                 i++;
//                 this.timeout = setTimeout(type, this.speed);
//             } else {
//                 setTimeout(() => this.delete(), this.pauseTime);
//             }
//         };
//         type();
//     }

//     delete() {
//         let i = this.text.length;
//         const del = () => {
//             if (i > 1) {
//                 this.element.textContent = this.text.substring(0, i - 1);
//                 i--;
//                 this.timeout = setTimeout(del, this.deleteSpeed);
//             } else {
//                 setTimeout(() => this.type(), this.pauseTime);
//             }
//         };
//         del();
//     }

//     start() {
//         this.type();
//     }

//     stop() {
//         if (this.timeout) {
//             clearTimeout(this.timeout);
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // Date text animation
//     const revealSoonText = document.querySelector('.day .typing-text');
    
//     if (revealSoonText) {
//         const typewriter = new Typewriter(revealSoonText, 'Reveal Soon', {
//             speed: 100,
//             deleteSpeed: 50,
//             pauseTime: 2000
//         });
//         typewriter.start();
//     }
// }); 