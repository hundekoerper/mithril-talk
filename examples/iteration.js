const example = {
  oninit(vnode) {
    vnode.state.animalList = ['cat', 'dog', 'honeybadger'];
  },
  view(vnode) {
    return m('div', [
      m('h1', 'list of animals'),
      m('ul', vnode.state.animalList.map(animal => m('li', animal)))
    ]);
  }
};

m.mount(document.body, example);
