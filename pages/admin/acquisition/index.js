import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SidebarItems from "../../../components/admin/authorities/SidebarItems";
import AdminLayout from "../../../components/adminLayout";
import { withFormik, ErrorMessage } from "formik";
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty
  } = props;
  return (
    <div className="col s12">
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <span className="helper-text">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <input
                  id="id_number"
                  type="text"
                  placeholder="ID"
                  value={values.id_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-input"
                />
              </div>
              <div className="input-field col s5">
                {/* <i className="material-icons prefix">establishement</i> */}
                <input
                  id="etablishement"
                  type="text"
                  placeholder="etablishement"
                  value={values.etablishement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-input"
                ></input>
              </div>
              <div className="row">
                <div className="input-field col s5">
                  <input
                    id="provider"
                    type="text"
                    placeholder="provider"
                    value={values.provider}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="text-input"
                  />
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="Name of the order"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-input"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">description</i>
                <textarea
                  id="Delivery_address"
                  placeholder="Delivry Address"
                  className="materialize-textarea"
                  value={values.Delivery_address}
                ></textarea>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">description</i>
                <textarea
                  id="Delivery_address"
                  placeholder="Billing Address"
                  className="materialize-textarea"
                  value={values.Billing_address}
                ></textarea>
              </div>
            </div>

            <button
              type="button"
              className="button"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                  /> */}
    </div>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ email: "", establishement: "" }),

  // Custom sync validation
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm" // helps with React DevTools
})(MyForm);

// const haha = () => {
//   const [id_number, setId_number] = useState("");
//   const [establishement, setEstablishement] = useState("");
//   const [financial_year, setFinancial_year] = useState("");
//   const [date, setDate] = useState("");
//   // const [id_number, setId_number] = useState("");
//   // const [id_number, setId_number] = useState("");
//   // const [id_number, setId_number] = useState("");
//   // const [id_number, setId_number] = useState("");

//   return (
//     <div className="col s12">
//       <div className="container">
//         <div className="row">
//           <form className="col s12">
//             <div className="row">
//               <div className="input-field col s6">
//                 <i className="material-icons prefix">account_circle</i>
//                 <input
//                   id="icon_prefix"
//                   type="text"
//                   className="validate"
//                   placeholder="Name"
//                 />
//                 <span
//                   className="helper-text"
//                   data-error="wrong"
//                   data-success="right"
//                 >
//                   Helper Text
//                 </span>
//               </div>
//               <div className="input-field col s6">
//                 <i className="material-icons prefix">phone</i>
//                 <input
//                   id="icon_telephone"
//                   type="tel"
//                   className="input1"
//                   placeholder="Telephone"
//                   contentEditable="true"
//                 ></input>
//               </div>
//             </div>
//             <div className="row">
//               <div className="input-field col s12">
//                 <i className="material-icons prefix">description</i>
//                 <textarea
//                   id="textarea2"
//                   className="materialize-textarea"
//                   value="hey"
//                 ></textarea>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <style jsx>
//         {`
//           input1 {
//             height: 400px;
//             display: inline-block;
//             border: solid 1px black;
//             min-width: 50px;
//             max-width: 200px;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

const orderForm = () => {
  return (
    <div>
      <h3>Order Form</h3>
      <MyEnhancedForm />
    </div>
  );
};
AdminLayout.SidebarItems = SidebarItems;
orderForm.Layout = AdminLayout;

export default orderForm;
