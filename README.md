# react-scepter-redux-form-decorator

Decorator to hook up form presentation components to a redux-form handler in SCEPTER projects and to dispatch an action upon form submission

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![react-boilerplate](https://github.com/react-boilerplate/brand/blob/master/assets/logo.png)](https://gihub.com/react-boilerplate)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-scepter-redux-form-decorator.svg?branch=master)](https://travis-ci.org/source4societyorg/react-scepter-redux-form-decorator)

[![codecov](https://codecov.io/gh/source4societyorg/react-scepter-redux-form-decorator/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-scepter-redux-form-decorator)


# Installation

    npm install -S @source4society/react-scepter-redux-form-decorator

or

    yarn add @source4society/react-scepter-redux-form-decorator

# Usage

Wrap your presentational form component that uses redux-form fields in this component to hook it up to redux form processing and validation functionality.

You will need to supply a unique `formName`, a function to calculate the `initialValues` and a `FormComponent` with redux-form `Field` components inside as mandatory props.

Prop list:
    formName: PropTypes.string.isRequired, // Unique form name used by redux-form
    initialValues: PropTypes.func.isRequired, // function that returns an immutable object with key/value pairs of default values matching your field names from your presentational component
    onSubmit: PropTypes.func, // Optional. A function to override what happens when the form is submitted will receive the formValues argument containing key/value pair of field values in the form.
    validationRoutineFunction: PropTypes.func, // Optional. A function to override what happens on the validation step
    FormComponent: PropTypes.any.isRequired, // A form component that uses redux-form `Field` components

When the form is submitted, then the onSubmit routine will be called. The default behavior is to dispatch a SCEPTER_FORM_POST action. This object looks like the following:
    {
        type: SCEPTER_FORM_POST,
        formValues,
        formName,
        initialValues,        
    }

You can listen for this action in reducers/sagas and handle accordingly. This action is only dispatched when the form passes validation.