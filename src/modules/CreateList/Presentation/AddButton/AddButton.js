import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import AddButton from './';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for the AddButton component.
 * @function setup
 * @returns {ShallowWrapper}
*/

const setup = (props = {}) => shallow(<AddButton  {...props} />);


const findByTestAttr = (wrapper, value) => wrapper.find(`[testID='${value}']`)

test('renders button without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"add-button-container");
    expect(container.length).toBe(1);
});

test('does not throw warning with expected data props', () => {
    const expectedProps = { 
        onCreatePress: () => null,
     };
    const propError = checkPropTypes(AddButton.propTypes, expectedProps, 'prop', AddButton.data);
    expect(propError).toBeUndefined();
});

test('pressing on button calls onCreatePress function', () => {
    const onPress = jest.fn();
    const wrapper = setup({onCreatePress: onPress});
    const button = findByTestAttr(wrapper,'add-button');
    button.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
});
