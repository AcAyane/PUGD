import React, { useState, useMemo } from "react";
import Router from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GetOrder } from "../../../graphql/queries/acquisition/order";
import { GetAllOrderLines } from "../../../graphql/queries/acquisition/orderline";
import { UpdateOrder } from "../../../graphql/mutations/acquisition/order";
import {
  InsertOrderLine,
  UpdateOrderLine,
  DeleteOrderLine,
} from "../../../graphql/mutations/acquisition/orderline";
import { GetAllProviders } from "../../../graphql/queries/acquisition/provider";
import Select from "react-select";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import MaterialTable from "material-table-formik";

const options = [
  { value: "20/3/2020", label: "20/3/2020" },
  { value: "1/3/2020", label: "1/3/2020" },
];

const ObjectId = (
  m = Math,
  d = Date,
  h = 16,
  s = (s) => m.floor(s).toString(h)
) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));

const UpdateQuotation = () => {
  const [order_line, setOrder_line] = useState([]);
  const [insertOrderLine] = useMutation(InsertOrderLine, {
    onError: (error) => {
      alert(error.message);
    },
  });
  const [updateOrderLine] = useMutation(UpdateOrderLine, {
    onError: (error) => {
      alert(error.message);
    },
  });
  const [deleteOrderLine] = useMutation(DeleteOrderLine, {
    onError: (error) => {
      alert(error.message);
    },
  });

  const [updateOrder] = useMutation(UpdateOrder, {
    onError: (error) => {
      alert(error.message);
    },
  });
  const { loading, error, data: data_order } = useQuery(GetOrder, {
    variables: { id: Router.query.id },
  });
  const { data: data_lines } = useQuery(GetAllOrderLines, {
    variables: { order: Router.query.id },
  });

  useMemo(() => {
    if (data_lines && data_lines.getAllOrderLines) {
      setOrder_line(data_lines.getAllOrderLines);
    }
  }, [data_lines]);

  const ListPro = [];
  function Providers() {
    const { loading, data, error } = useQuery(GetAllProviders);
    if (loading) return "Loading...";
    if (error) return `couldn't fetch data`;
    for (var i = 0; i < data.getallproviders.length; i++) {
      ListPro.push({
        value: data.getallproviders[i].name,
        label: data.getallproviders[i].name,
      });
    }
  }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const splitfunction = (e) =>
    e
      .split("(")[1]
      .split(")")[0]
      .replace(/^"(.*)"$/, "$1");
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          id: Router.query.id,
          quotation_number: data_order.getOrder.quotation_number,
          establishement: data_order.getOrder.establishement,
          name: data_order.getOrder.name,
          financial_year: data_order.getOrder.financial_year,
          date: new Date(),
          delivery_address: data_order.getOrder.delivery_address,
          billing_address: data_order.getOrder.billing_address,
          notes: data_order.getOrder.notes,
          status: data_order.getOrder.status,
          type: data_order.getOrder.type,
          provider: data_order.getOrder.provider,
        }}
        validationSchema={Yup.object().shape({
          establishement: Yup.string().required("establishement is required"),
          name: Yup.string().required("name is required"),
          quotation_number: Yup.string().required("id is required"),
          financial_year: Yup.string().required("financial year is required"),

          provider: Yup.string().required("provider is required"),
        })}
        onSubmit={(values, actions) => {
          let initord = [];
          for (var i = 0; i < order_line.length; i++) {
            initord.push(splitfunction(order_line[i]._id));
          }
          updateOrder({
            variables: {
              _id: Router.query.id,
              name: values.name,
              quotation_number: values.quotation_number,
              status: values.status,
              order_lines: initord,
            },
          });
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);

          alert("Quotation updated succesfully");
        }}
        render={({ values, errors, touched, setFieldValue }) => (
          <div className="row">
            <Form>
              <legend>Update Quotation</legend>
              <div className="row">
                <div className="col s12 m6">
                  <label htmlFor="Quotation_number">Quotation Number</label>
                  {touched.quotation_number && errors.quotation_number && (
                    <p className="alert alert-danger">
                      {errors.quotation_number}
                    </p>
                  )}
                  <Field
                    type="text"
                    name="quotation_number"
                    placeholder="Enter quotation number"
                    className="form-control"
                  />
                </div>
                <div className="col s12 m6">
                  <label htmlFor="Status">status</label>
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
                {Providers()}
                {/* {AllOrderLines()} */}
                <div className="col s12 m6">
                  <label htmlFor="provider">Provider</label>
                  {touched.id_Provider && errors.id_Provider && (
                    <p className="alert alert-danger">{errors.id_Provider}</p>
                  )}
                  <Select
                    id="provider"
                    name="provider"
                    options={ListPro}
                    multi={true}
                    selected={values.provider}
                    onChange={(provider) =>
                      setFieldValue("provider", provider.value)
                    }
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
                    selected={values.financial_year}
                    onChange={(year) =>
                      setFieldValue("financial_year", year.value)
                    }
                  />
                </div>
              </div>
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
              {/*Order Lines List*/}
              <div style={{ width: "114%" }}>
                <div>
                  {" "}
                  <MaterialTable
                    columns={[
                      { title: "Isbn", field: "isbn" },
                      {
                        title: "title",
                        field: "title",
                      },
                      {
                        title: "author",
                        field: "author",
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
                      { title: "status", field: "status" },
                    ]}
                    data={order_line}
                    title="Order Lines"
                    editable={{
                      onRowAdd: (newData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            setOrder_line(() => {
                              newData._id = ObjectId();
                              newData.order = Router.query.id;
                              // values.order_lines.push(newData.id);
                              const order_line1 = [...order_line, newData];
                              return order_line1;
                            });
                            resolve();
                          }, 1000);
                        }).then(() => {
                          insertOrderLine({ variables: newData });
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            setOrder_line(() => {
                              const order_line1 = [
                                ...order_line.filter((x) => x !== oldData),
                                newData,
                              ];
                              return order_line1;
                            });
                            resolve();
                          }, 1000);
                        }).then(() => {
                          var a = splitfunction(newData._id);
                          updateOrderLine({
                            variables: {
                              _id: a,
                              isbn: newData.isbn,
                              title: newData.title,
                              author: newData.author,
                              quantity: newData.quantity,
                              price: newData.price,
                              discount: newData.discount,
                              status: newData.status,
                            },
                          });
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            setOrder_line(() => {
                              const order_line1 = [
                                ...order_line.filter((x) => x !== oldData),
                              ];
                              return order_line1;
                            });
                            resolve();
                          }, 1000);
                        }).then(() => {
                          var a = splitfunction(oldData._id);
                          deleteOrderLine({
                            variables: { _id: a },
                          });
                        }),
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>

                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setFormValues({ formValues: values });
                  }}
                >
                  SetValues
                </Button> */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.placeorder()}
                  type="submit"
                >
                  Place an order{" "}
                </Button>
              </div>
            </Form>
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
        margin-right:20px;
        margin-left:20px
      },
        `}
      </style>
    </div>
  );
};

export default UpdateQuotation;
