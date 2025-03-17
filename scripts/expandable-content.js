import pxToRem from './utils/pxToRem.js';

const rootSelector = '[data-js-expandable-content]';

class ExpandableContent {
  selectors = {
    root: rootSelector,
    button: '[data-js-expandable-content-button]',
  };

  stateClasses = {
    isExpanded: 'is-expanded',
  };

  animationParams = {
    duration: 500,
    easing: 'ease',
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.buttonElement = this.rootElement.querySelector(this.selectors.button);
    this.bindEvents();
  }

  expand() {
    const { offsetHeight, scrollHeight } = this.rootElement;

    this.rootElement.classList.add(this.stateClasses.isExpanded);
    this.rootElement.animate(
      [
        {
          maxHeight: `${pxToRem(offsetHeight)}rem`,
        },
        {
          maxHeight: `${pxToRem(scrollHeight)}rem`,
        },
      ],
      this.animationParams
    );

    console.log('expand', this.rootElement.offsetHeight);
  }

  onButtonClick = () => {
    this.expand();
  };

  bindEvents() {
    this.buttonElement.addEventListener('click', this.onButtonClick);
  }
}

class ExpandableContentCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((el) => {
      new ExpandableContent(el);
    });
  }
}

export default ExpandableContentCollection;
