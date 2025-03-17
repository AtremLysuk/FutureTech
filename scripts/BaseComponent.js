class BaseComponent {

    constructor() {
        if(this.constructor === BaseComponent) {
            throw new Error("No way!!")
        }
    }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        target[prop] = newValue;

        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true;
      },
    });
  }

  //   перерисовка UI в ответ на обновление состояния

  updateUI() {
    throw new Error('Need Update UI');
  }
}

export default BaseComponent;
