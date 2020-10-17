//validation of input
export default function validate(values) {
  let errors = {};
  //if there is no name, display message
  if (!values.visitorName.trim()) {
    errors.visitorName = 'Name required';
  }
  //if no email is provided, require it
  if (!values.email) {
    errors.email = 'Email required';
    //if there is a value, check that it is in the correct format
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}
