const route1 = {
  view() {
    return m('div', [
      m('nav', [
        m('a', { href: '/#/route1' }, 'Route1'),
        m('a', { href: '/#/route2' }, 'Route2'),
        m('a', { href: '/#/route3' }, 'Route3')
      ]),
      m('main', [
        m('h1', 'this is route 1')
      ])
    ]);
  }
};

const route2 = {
  view() {
    return m('div', [
      m('nav', [
        m('a', { href: '/#/route1' }, 'Route1'),
        m('a', { href: '/#/route2' }, 'Route2'),
        m('a', { href: '/#/route3' }, 'Route3')
      ]),
      m('main', [
        m('h1', 'this is route 3')
      ])
    ]);
  }
};

const route3 = {
  view() {
    return m('div', [
      m('nav', [
        m('a', { href: '/#/route1' }, 'Route1'),
        m('a', { href: '/#/route2' }, 'Route2'),
        m('a', { href: '/#/route3' }, 'Route3')
      ]),
      m('main', [
        m('h1', 'this is route 2')
      ])
    ]);
  }
};

m.route.prefix('#');
m.route(document.body, '/', {
  '/route1': route1,
  '/route2': route2,
  '/route3': route3
});
