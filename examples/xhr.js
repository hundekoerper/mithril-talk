const example = {
  oninit(vnode) {
    vnode.state.animalList = [];
    vnode.state.getAnimals = () => m.request({
      method: 'GET',
      url: '/animals'
    }).then((data) => { vnode.state.animalList = data; });
  },
  view(vnode) {
    return m('div', [
      m('h1', 'xhr example'),
      m('button', { onclick: vnode.state.getAnimals }, 'Get animals'),
      m('ul', vnode.state.animalList.map(animal => m('li', animal)))
    ]);
  }
};

m.mount(document.body, example);
