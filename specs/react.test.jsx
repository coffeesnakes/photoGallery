import React from 'react';
import { shallow/* mount, render */ } from 'enzyme';
// import Header from '../client/src/components/Header';
// import Gallery from '../client/src/components/Gallery';
import App from '../client/src/components/App';

describe('App testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Gallery rendered lets go my main man!', () => {
    expect(wrapper.find('Gallery')).toExist();
  });
  it('Header rendered LETS GOOOO', () => {
    expect(wrapper.find('Header')).toExist();
  });
});

// describe('<Header />', () => {
//   it('should render without throwing an error', () => {
//     expect(shallow(<Header />).contains(<div>Ut enim ab culpa saepe debitis.</div>)).toBe(true);
//     expect(shallow(<Header />).contains(<div>4.40</div>)).toBe(true);
//     expect(shallow(<Header />).contains(<div>Superhost</div>)).toBe(true);
//     expect(shallow(<Header />).contains(<div>Russelton, Alaska, Uzbekistan</div>)).toBe(true);
//   });

//   it('should be selectable by class "header"', () => {
//     expect(shallow(<Header />).is('.header')).toBe(true);
//   });

//   it('should mount in a full DOM', () => {
//     expect(mount(<Header />).find('Header').length).toBe(1);
//   });

//   // it('should render to static HTML', () => {
// });
// });
