import React, { useState } from "react";
import Select from "react-select";
import { Formik, Form, Field, FieldArray } from "formik";
import html2canvas from "../../../helpers/html2canvas";
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { InsertOrder } from "../../../graphql/mutations/acquisition/order";
import { InsertOrderLine } from "../../../graphql/mutations/acquisition/orderline";
// import { Mutation, graphql } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../../../shared/apollo";
import MaterialTable from "material-table-formik";

const ObjectId = (
  m = Math,
  d = Date,
  h = 16,
  s = (s) => m.floor(s).toString(h)
) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));

var OrderID = ObjectId();
var OrderID2 = ObjectId();

const initialFormData = {
  id: OrderID,
  id_number: "1",
  establishement: "hahahaa",
  name: "haha",
  financial_year: "10",
  date: new Date(),
  delivery_address: "zaeaze",
  billing_address: "zaeaze",
  notes: "zaeaze",
  status: "pending",
  type: "order",
  provider: "zaeaze",
  order_lines: [OrderID2],
};
// $order_lines: [String!]!
const b1 = {
  id: OrderID2,
  author: "34",
  budget: "B1",
  discount: "3",
  id_record: "1",
  isbn: "Isbn1",
  price: "22",
  quantity: "2",
  status: "Pending",
  title: "Baka Book",
  order: OrderID,
};
const options = [
  { value: "20/3/2020", label: "20/3/2020" },
  { value: "1/3/2020", label: "1/3/2020" },
];
const options1 = [
  { value: "provider1", label: "provider1" },
  { value: "provider2", label: "provider2" },
];
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const AddOrder = () => {
  // const [login, { error, data }] = useLazyQuery(LOGIN_QUERY);
  const [order_line, setOrder_line] = useState([b1]);

  const [insertOrder] = useMutation(InsertOrder, {
    onError: (error) => {
      alert(error.message);
    },
  });
  const [insertOrderLine] = useMutation(InsertOrderLine, {
    onError: (error) => {
      alert(error.message);
    },
  });

  const printDocument = () => {
    let jsPDF = null;
    if (typeof window !== "undefined") {
      import("jspdf").then((module) => {
        jsPDF = module.default;
      });
    }
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);

      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <br />
      <Formik
        enableReinitialize
        initialValues={initialFormData}
        validationSchema={Yup.object().shape({
          establishement: Yup.string().required("establishement is required"),
          name: Yup.string().required("name is required"),
          id_number: Yup.string().required("id is required"),
          financial_year: Yup.string().required("financial year is required"),

          provider: Yup.string().required("provider is required"),
        })}
        onSubmit={(values, actions) => {
          new Promise((resolve) => {
            setTimeout(() => {
              for (var i = 0; i < order_line.length; i++) {
                // this.createOrderLine(order_line[i]);
                insertOrderLine({ variables: order_line[i] });
              }
              resolve(order_line);
            }, 2000);
            // eslint-disable-next-line no-unused-vars
          }).then((orderlines) => {
            insertOrder({ variables: values });
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          });
          alert("Order added succesfully");
        }}
        render={({ values, errors, touched, setFieldValue }) => (
          <div id="divToPrint">
            <Button variant="contained" color="primary" onClick={printDocument}>
              Print
            </Button>
            <div className="row">
              <Form>
                <legend>New Order</legend>
                <div className="row">
                  <div className="col s12 m6">
                    <label htmlFor="Id">Id</label>
                    {touched.id_number && errors.id_number && (
                      <p className="alert alert-danger">{errors.id_number}</p>
                    )}
                    <Field
                      type="text"
                      name="id_number"
                      placeholder="Enter id"
                      className="form-control"
                    />
                  </div>
                  <div className="col s12 m6">
                    <label htmlFor="Id">status</label>
                    <Field
                      type="text"
                      name="status"
                      placeholder="pending"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6">
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
                  <div className="col s12 m6">
                    <label htmlFor="Provider">Provider</label>
                    {touched.id_Provider && errors.id_Provider && (
                      <p className="alert alert-danger">{errors.id_Provider}</p>
                    )}
                    <Select
                      id="provider"
                      name="provider"
                      options={options1}
                      multi={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6">
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
                  <div className="col s12 m6">
                    <label htmlFor="financial_year">Financial year</label>
                    {touched.financial_year && errors.financial_year && (
                      <p className="alert alert-danger">
                        {errors.financial_year}
                      </p>
                    )}
                    <Select
                      id="financial_year"
                      name="financial_year"
                      options={options}
                      multi={true}
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                          <label htmlFor="adress">Adress</label>
                          {touched.adress && errors.adress && (
                            <p className="alert alert-danger">
                              {errors.adress}
                            </p>
                          )}
                          <Field
                            type="text"
                            name="adress"
                            placeholder="Enter en adress"
                            className="form-control"
                          />
                        </div> */}
                <div className="row">
                  <div className="col s12 m6">
                    <label htmlFor="date">Date</label>

                    <DatePicker
                      className="date-control"
                      name="date"
                      showPopperArrow={false}
                      selected={values.date}
                      onChange={(date) => setFieldValue("date", date)}
                    />
                  </div>
                  <div className="col s12 m6">
                    <label htmlFor="delivery_address">Delivery address</label>
                    {touched.delivery_address && errors.delivery_address && (
                      <p className="alert alert-danger">
                        {errors.delivery_address}
                      </p>
                    )}
                    <Field
                      type="text"
                      name="delivery_address"
                      placeholder="Enter delivery address"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6">
                    <label htmlFor="billing_address">Billing address</label>
                    {touched.billing_address && errors.billing_address && (
                      <p className="alert alert-danger">
                        {errors.billing_address}
                      </p>
                    )}
                    <Field
                      type="text"
                      name="billing_address"
                      placeholder="Enter billing address"
                      className="form-control"
                    />
                  </div>
                  <div className="col s12 m6">
                    <label htmlFor="notes">Notes</label>
                    {touched.notes && errors.notes && (
                      <p className="alert alert-danger">{errors.notes}</p>
                    )}
                    <Field
                      type="text"
                      name="notes"
                      placeholder="Enter your notes"
                      className="form-control"
                    />
                  </div>
                </div>
                <br></br>
                <div style={{ width: "100%" }}>
                  <MaterialTable
                    columns={[
                      { title: "id", field: "id_record" },
                      { title: "Isbn", field: "isbn" },
                      {
                        title: "title",
                        field: "title",
                      },
                      {
                        title: "author",
                        field: "author",
                        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
                      },
                      {
                        title: "quantity",
                        field: "quantity",
                        type: "numeric",
                      },
                      {
                        title: "price",
                        field: "price",
                        type: "numeric",
                      },
                      {
                        title: "discount",
                        field: "discount",
                        type: "numeric",
                      },
                      { title: "budget", field: "budget" },
                      { title: "status", field: "status" },
                    ]}
                    data={order_line}
                    title="Order Lines"
                    editable={{
                      onRowAdd: (newData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            setOrder_line(() => {
                              newData.id = ObjectId();
                              newData.order = OrderID;
                              values.order_lines.push(newData.id);
                              const order_line1 = [...order_line, newData];
                              return { order_line1 };
                            });
                            resolve();
                          }, 1000);
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            setOrder_line(() => {
                              const order_line1 = [
                                ...order_line.filter((x) => x !== oldData),
                                newData,
                              ];
                              return { order_line1 };
                            });
                            resolve();
                          }, 1000);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            setOrder_line(() => {
                              const order_line1 = [
                                ...order_line.filter((x) => x !== oldData),
                              ];
                              return { order_line1 };
                            });
                            resolve();
                          }, 1000);
                        }),
                    }}
                  />
                </div>
                <div className="form-group">
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.setFormValues({ formValues: values });
                    }}
                  >
                    SetValues
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      />

      <style jsx>
        {`
          
       .paper {
        display: flex;
        // margin-top: 64px;
        align-items: center;
        flex-direction: column;
      },
      .form {
        display: relative;
        width: 80%;
        margin-top: 8px;
        margin-:4px;
        margin-left:10px
      },
        `}
      </style>
    </div>
  );
};

export default AddOrder;
