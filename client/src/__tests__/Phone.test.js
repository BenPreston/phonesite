import React from 'react'
import Phone from '../components/Phone';
import { shallow } from 'enzyme';

const fakePhone = {
    name: 'Galaxy S8',
    imageFileName: 'Galaxy_S7.png'
};    

const openPopup = jest.fn();

const wrapper = shallow(<Phone phone={fakePhone} openPopup={openPopup} />);

describe('<Phone />', () => {

    it('Renders and displays properly', () => {
     
        const title = wrapper.find('.title');

        expect(title.text()).toBe(fakePhone.name)

        const image = wrapper.find('img');
      
        expect(image.props().src).toBe(fakePhone.imageFileName);

        expect(image.props().alt).toBe(fakePhone.name);
    })


    it('The openPopup click works', () => {
    const divToClick = wrapper.find('.result');

    console.log(divToClick.debug());

    divToClick.simulate('click');
    
    expect(openPopup).toHaveBeenCalled()
    });
    
})