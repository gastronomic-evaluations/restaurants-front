import { getIn } from 'formik'

const simpleInputErros = ({ errors, touched, name }) => errors[name] && touched[name]
const arrayInputErros = ({ errors, touched, name }) => getIn(errors, name) && getIn(touched, name)
const InputHasErrors = params => simpleInputErros(params) || arrayInputErros(params)

export default InputHasErrors