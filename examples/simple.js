const example = {
  view() {
    return m('div', [
      m('h1', 'example component'),
      m('p', 'some text')
    ]);
  }
};

// with JSX

// const example = {
//  view() {
//    return (
//      <div>
//        <h1>example component</h1>
//        <p>some text</p>
//      </div>
//    )
//  }
//};

m.mount(document.body, example);
