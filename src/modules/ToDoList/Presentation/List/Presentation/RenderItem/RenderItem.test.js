import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import RenderItem from './';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for the RenderItem component.
 * @function setup
 * @returns {ShallowWrapper}
*/

const setup = (props = {}) => shallow(<RenderItem  {...props} />);


const findByTestAttr = (wrapper, value) => wrapper.find(`[testID='${value}']`)

test('renders task without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"task-container");
    expect(container.length).toBe(1);
});

test('renders checkout without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"checkout");
    expect(container.length).toBe(1);
});

test('does not throw warning with expected data props', () => {
    const expectedProps = { 
        value: false,
        onValueChange: () => null,
        onListPress: () => null,
        onDeletePress: () => null,
        item: {title: ''},
     };
    const propError = checkPropTypes(RenderItem.propTypes, expectedProps, 'prop', RenderItem.data);
    expect(propError).toBeUndefined();
});


test('pressing on button calls view function', () => {
    const onPress = jest.fn();
    const wrapper = setup({onListPress: onPress,item: {title: ''}});
    const button = findByTestAttr(wrapper,'view-button');
    button.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
});

test('pressing on button calls delete function', () => {
    const onPress = jest.fn();
    const wrapper = setup({onDeletePress: onPress,item: {title: ''}});
    const button = findByTestAttr(wrapper,'delete-button');
    button.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
});


