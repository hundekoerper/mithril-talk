function navigationComponent(currentView) {
  return {
    view() {
      return m('div', [
        m('nav', [
          m('a', { href: '/' }, 'Route1'),
          m('a', { href: '/#/route2' }, 'Route2'),
          m('a', { href: '/#/route3' }, 'Route3')
        ]),
        m('main', [
          currentView()
        ])
      ]);
    }
  };
}

function viewOne() {
  return m('h1', `Hi, I'm View1`);
}

function viewTwo() {
  return m('h1', `I'm View2`);
}

function viewThree() {
  return m('h1', `and I'm View3`);
}


m.route.prefix('#');
m.route(document.body, '/', {
  '/': navigationComponent(viewOne),
  '/route2': navigationComponent(viewTwo),
  '/route3': navigationComponent(viewThree)
});
