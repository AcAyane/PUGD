/* eslint-disable react/jsx-key */
import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Table from "@/components/ui/Table/Table";
import { GetOrdersReceived } from "@/graphql/queries/acquisition/order";
import CardTitle from "@/components/ui/card/cardTitle";
import Card from "@/components/ui/card/card";
import AdminLayout from "@/components/adminLayout";
import Button from "@/components/ui/Button";
const AllDelivery = () => {
  function splitfunction(e) {
    return e
      .split("(")[1]
      .split(")")[0]
      .replace(/^"(.*)"$/, "$1");
  }

  const { loading, error, data } = useQuery(GetOrdersReceived, {
    variables: { type: "order", received: true },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <CardTitle>
            {" "}
            <h5>Purchase Management : Delivery</h5>
          </CardTitle>
          <Card>
            <div className="col s12">
              {data == null ? (
                nul
              ) : (
                <Table
                  Thead={
                    <tr>
                      <th>Number</th>
                      <th>Provider</th>
                      <th>Date Order</th>
                      <th>State</th>
                      <th>Actions</th>
                    </tr>
                  }
                  Tbody={
                    <tbody>
                      {data.getOrders.map((item) => (
                        <tr>
                          <td>
                            <span className="chip lighten-5 red red-text">
                              {item.order_number}
                            </span>
                          </td>
                          <td>{item.provider}</td>
                          <td>{item.date}</td>
                          <td>Received</td>

                          <td>
                            <div className="invoice-action">
                              <a
                                href={`/admin/acquisition/Delivery?id=${splitfunction(
                                  item._id
                                )}`}
                                className="invoice-action-edit"
                              >
                                <i className="material-icons">book</i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  }
                />
              )}
            </div>
            <Button href="/admin/acquisition/AddProvider" rounded={2}>
              New
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

AllDelivery.Layout = AdminLayout;
export default AllDelivery;
