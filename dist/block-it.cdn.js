(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BlockIT = factory());
})(this, (function () { 'use strict';

  class GlobalBlockIT {
    baseClass = "block-it";
    unblockingClass = "is-unblocking";

    constructor() {
      this.blockingDiv = document.createElement("div");
      this.loaderSpan = document.createElement("span");
      this.textSpan = document.createElement("span");

      this.blockingDiv.classList.add(this.baseClass);

      this.loaderSpan.classList.add(`${this.baseClass}-loader`);
      this.loaderSpan.appendChild(this._createSvgLoader());
      this.loaderSpan.style.minWidth = "30px";
      this.loaderSpan.style.maxWidth = "100px";
      this.loaderSpan.style.width = "50%";

      this.textSpan.classList.add(`${this.baseClass}-text`);
      this.textSpan.style.textTransform = "uppercase";

      this.blockingDiv.appendChild(this.loaderSpan);
      this.blockingDiv.appendChild(this.textSpan);
    }

    blockIT(selector = "", text = "") {
      this.blockingDiv.querySelector(`.${this.baseClass}-text`).textContent =
        text || "";
      const parent = selector ? document.querySelector(selector) : document.body;
      parent.appendChild(this.blockingDiv);
    }

    unBlockIT() {
      document.querySelectorAll(`.${this.baseClass}`).forEach((element) => {
        element.classList.add(this.unblockingClass);
        setTimeout(
          (element) => {
            if (element) {
              element.classList.remove(this.unblockingClass);
              element.parentElement.removeChild(element);
            }
          },
          300,
          element,
        );
      });
    }

    _createSvgLoader() {
      const standard = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(standard, "svg");
      svg.setAttribute("fill", "currentColor");
      svg.setAttribute("width", "100%");
      svg.setAttribute("viewBox", "0 0 100 100");

      const createCircleGroup = (translateX, beginTime) => {
        const g = document.createElementNS(standard, "g");
        g.setAttribute("transform", `translate(${translateX} 50)`);

        const circle = document.createElementNS(standard, "circle");
        circle.setAttribute("r", "9");
        circle.setAttribute("fill", "inherit");

        const scaleValue =
          translateX === 25 ? "0.239" : translateX === 50 ? "0.00152" : "0.299";
        circle.setAttribute("transform", `scale(${scaleValue})`);

        const animateTransform = document.createElementNS(
          standard,
          "animateTransform",
        );
        animateTransform.setAttribute("attributeName", "transform");
        animateTransform.setAttribute("begin", `${beginTime}s`);
        animateTransform.setAttribute("calcMode", "spline");
        animateTransform.setAttribute("dur", "0.8s");
        animateTransform.setAttribute("keySplines", "0.3 0 0.7 1;0.3 0 0.7 1");
        animateTransform.setAttribute("keyTimes", "0;0.5;1");
        animateTransform.setAttribute("repeatCount", "indefinite");
        animateTransform.setAttribute("type", "scale");
        animateTransform.setAttribute("values", "0;1;0");

        circle.appendChild(animateTransform);
        g.appendChild(circle);

        return g;
      };

      svg.appendChild(createCircleGroup(25, -0.266));
      svg.appendChild(createCircleGroup(50, -0.133));
      svg.appendChild(createCircleGroup(75, 0));

      return svg;
    }
  }

  const blockIT = new GlobalBlockIT();

  var index = {
    block: blockIT.blockIT.bind(blockIT),
    unBlock: blockIT.unBlockIT.bind(blockIT),
  };

  return index;

}));
