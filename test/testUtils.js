import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conforimngProps) => {
  const propError = checkPropTypes(component.propTypes, conforimngProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}
