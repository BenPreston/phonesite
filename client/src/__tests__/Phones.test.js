import React from 'react'
import Phones from '../components/Phones';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';


const fakePhones = [
    {
        id: 0,
        name: 'Galaxy S8'
    },
    {
        id: 1,
        name: 'iPhone 7'
        
    }
];

const mockOpenPopup = jest.fn();

describe('<Phone />', () => {

    it('Renders and displays properly', () => {
        const wrapper = shallow(<Phones phones={fakePhones} openPopup={mockOpenPopup} />);

        expect(toJSON(wrapper)).toMatchSnapshot();

        console.log(wrapper.debug())

    })


})