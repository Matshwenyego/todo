import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import List from './';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for the List component.
 * @function setup
 * @returns {ShallowWrapper}
*/

const setup = (props = {}) => shallow(<List  {...props} />);


const findByTestAttr = (wrapper, value) => wrapper.find(`[testID='${value}']`)

test('renders button without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"list-container");
    expect(container.length).toBe(1);
});

test('renders list without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper,"list");
    expect(container.length).toBe(1);
});

test('does not throw warning with expected data props', () => {
    const expectedProps = { 
        data: [],
        extraData: [],
        keyExtractor: () => null,
        value: '',
        onValueChange: () => null,
        onListPress: () => null,
        onDeletePress: () => null,
     };
    const propError = checkPropTypes(List.propTypes, expectedProps, 'prop', List.data);
    expect(propError).toBeUndefined();
});

