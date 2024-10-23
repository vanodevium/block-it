(() => {
  const classBlockIT = "block-it";
  const classSpinnerWrapper = "block-it__spinner-wrapper";
  const classIsUnblocking = "is-unblocking";

  /**
   * Set up the blocking div to be appended
   */
  const blockingDiv = document.createElement("div");
  const spinnerWrapper = document.createElement("div");
  spinnerWrapper.classList.add(classSpinnerWrapper);
  blockingDiv.classList.add(classBlockIT);
  blockingDiv.appendChild(spinnerWrapper);

  /**
   * Blocking the UI
   */
  window.BlockIT = (selector = "", text = "") => {
    spinnerWrapper.setAttribute("data-block-it-text", text);
    const parent = selector ? document.querySelector(selector) : document.body;
    parent?.appendChild(blockingDiv);
  };

  /**
   * Unblocking the UI.
   */
  window.UnBlockIT = () => {
    document.querySelectorAll(`.${classBlockIT}`).forEach((element) => {
      element.classList.add(classIsUnblocking);
      setTimeout(
        (element) => {
          if (element) {
            element.classList.remove(classIsUnblocking);
            element.parentElement.removeChild(element);
          }
        },
        300,
        element,
      );
    });
  };
})();
