const example = {
  oninit(vnode) {
    vnode.state.counter = 9000;
  },
  view(vnode) {
    return m('div', [
      m('h1', 'a component with state'),
      m('h2', `Awesomeness level: ${vnode.state.counter}`),
      m('button', {
        onclick: () => { vnode.state.counter++; }
      }, 'Increment'),
      m('button', {
        onclick: () => { vnode.state.counter--; }
      }, 'Decrement')
    ]);
  }
};

m.mount(document.body, example);
