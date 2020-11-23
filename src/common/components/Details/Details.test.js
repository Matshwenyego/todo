import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import Details from './';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for the Details component.
 * @function setup
 * @returns {ShallowWrapper}
*/

const setup = (props = {}) => shallow(<Details style={{}}  {...props} />);


const findByTestAttr = (wrapper, value) => wrapper.find(`[testID='${value}']`)

test('renders button without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"details-container");
    expect(container.length).toBe(1);
});

test('renders textinput without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"details-input");
    expect(container.length).toBe(1);
});

test('does not throw warning with expected data props', () => {
    const expectedProps = { 
        details: '', 
        editable: false,
        placeholder: '',
        multiline: false,
        style: {},
        value: '',
        onChangeText: () => null,
     };
    const propError = checkPropTypes(Details.propTypes, expectedProps, 'prop', Details.data);
    expect(propError).toBeUndefined();
});

test('calls onChangeText and sets value', () => {
    const onPress = jest.fn();
    const wrapper = setup({onChangeText:onPress});
    const textinput = findByTestAttr(wrapper,'details-input');
    textinput.simulate('ChangeText', 'test');
    expect(onPress).toHaveBeenCalledWith('test');
});