import React from 'react'
import Popup from '../components/Popup';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';


const randomSelectedPhone = 
    {
        "id":0,
        "name":"iPhone 7",
        "manufacturer":"Apple",
        "description":"iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
        "color":"black",
        "price":769,
        "imageFileName":"IPhone_7.png",
        "screen":"4,7 inch IPS",
        "processor":"A10 Fusion",
        "ram":2
     };

const mockClosePopup = jest.fn();

describe('<Popup />', () => {

    const wrapper = shallow(<Popup selected={randomSelectedPhone} closePopup={mockClosePopup} />);

    it('Renders and displays properly', () => {
   
        expect(toJSON(wrapper)).toMatchSnapshot();

    })

    
    it('Should have a close button that works', () => {
        const divToClick = wrapper.find('.close');

        divToClick.simulate('click');
        
        expect(mockClosePopup).toHaveBeenCalled()
      });


})