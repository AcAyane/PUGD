import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { InsertProvider } from '../../../graphql/mutations/acquisition/provider';
import { Mutation } from 'react-apollo';
import { withApollo } from '../../../shared/apollo';
import React from 'react';
import Router from 'next/router';

function Addpro() {
  const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  return (
    <div className="container">
      <Mutation mutation={InsertProvider}>
        {(insertProvider, { data }) => (
          <Formik
            initialValues={{
              establishement: '',
              name: '',
              account: '',
              adress: '',
              phone: '',
              email: '',
              website: ''
            }}
            validationSchema={Yup.object().shape({
              establishement: Yup.string().required(
                'establishement is required'
              ),
              name: Yup.string().required('name is required'),
              account: Yup.string().required('account is required'),
              adress: Yup.string().required('adress is required'),
              phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('phone is required'),
              email: Yup.string()
                .email('must be a valid email adress')
                .required('email is required'),
              website: Yup.string().url('must be a url')
            })}
            onSubmit={(values, actions) => {
              insertProvider({ variables: values });
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
              alert('Provider added succesfully');
              Router.push('/admin/acquisition/AllProviders');
            }}
            render={({ errors, touched }) => (
              <Form>
                <legend>New provider</legend>

                <div className="form-group">
                  <label htmlFor="establishement">Establishement</label>
                  {touched.establishement && errors.establishement && (
                    <p className="alert alert-danger">
                      {errors.establishement}
                    </p>
                  )}

                  <Field
                    type="text"
                    name="establishement"
                    placeholder="Enter an establishement"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  {touched.name && errors.name && (
                    <p className="alert alert-danger">{errors.name}</p>
                  )}
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="account">Account</label>
                  {touched.account && errors.account && (
                    <p className="alert alert-danger">{errors.account}</p>
                  )}
                  <Field
                    type="text"
                    name="account"
                    placeholder="Enter an account"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adress">Adress</label>
                  {touched.adress && errors.adress && (
                    <p className="alert alert-danger">{errors.adress}</p>
                  )}
                  <Field
                    type="text"
                    name="adress"
                    placeholder="Enter en adress"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">phone</label>
                  {touched.phone && errors.phone && (
                    <p className="alert alert-danger">{errors.phone}</p>
                  )}
                  <Field
                    type="text"
                    name="phone"
                    placeholder="0670102010 or +212670102010 or (212)670102010"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  {touched.email && errors.email && (
                    <p className="alert alert-danger">{errors.email}</p>
                  )}
                  <Field
                    type="text"
                    name="email"
                    placeholder="you@yourdomain.com"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="website">website</label>
                  {touched.website && errors.website && (
                    <p className="alert alert-danger">{errors.website}</p>
                  )}
                  <Field
                    type="text"
                    name="website"
                    placeholder="Http://website"
                    className="form-control"
                  />
                </div>

                <button className="submitButton" type="submit" name="action">
                  Submit
                </button>
              </Form>
            )}
          />
        )}
      </Mutation>
      <style jsx>
        {`
.paper {
display: flex;
// margin-top: 64px;
align-items: center;
flex-direction: column;
},
.form {
display: center;
width: 80%;
margin-top: 8px;
margin-:4px;
},
`}
      </style>
    </div>
  );
}

export default withApollo({ ssr: true })(Addpro);
