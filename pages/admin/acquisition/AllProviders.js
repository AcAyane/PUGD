import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Table from "../../../components/ui/Table/Table";
import { GetAllProviders } from "../../../graphql/queries/acquisition/provider";
import { DeleteProvider } from "../../../graphql/mutations/acquisition/provider";
import CardTitle from "../../../components/ui/card/cardTitle";
import Card from "../../../components/ui/card/card";

const AllProviders = () => {
  const [
    deleteProvider,
    { loading: deleting, error: deleteError },
  ] = useMutation(DeleteProvider);

  function splitfunction(e) {
    return e
      .split("(")[1]
      .split(")")[0]
      .replace(/^"(.*)"$/, "$1");
  }

  const { loading, error, data } = useQuery(GetAllProviders);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <CardTitle>
            <h5>All providers</h5>
          </CardTitle>
          <Card>
            <div className="col s12">
              {data == null ? (
                nul
              ) : (
                <Table
                  Thead={
                    <tr>
                      <th>Name</th>
                      <th>Adress</th>
                      <th>Phone</th>
                      <th>Email</th>
                    </tr>
                  }
                  Tbody={
                    <tbody>
                      {data.getallproviders.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <td>
                            <span className="chip lighten-5 red red-text">
                              {item.name}
                            </span>
                          </td>
                          <td>{item.adress}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>

                          <td>
                            <div className="invoice-action">
                              <a
                                href="#"
                                className="invoice-action-view mr-4"
                                onClick={(e) => {
                                  deleteProvider({
                                    variables: { _id: splitfunction(item._id) },
                                    // update: (cache) => {
                                    //   cache.writeQuery({
                                    //     query: GetAllProviders,
                                    //     data: data.getallproviders.filter(
                                    //       (t) => t._id !== item._id
                                    //     ),
                                    //   });
                                    // },
                                    refetchQueries: [
                                      { query: GetAllProviders },
                                    ],
                                  });
                                }}
                              >
                                <i className="material-icons">delete</i>
                              </a>
                              <a
                                href={`/admin/acquisition/UpdateProvider?id=${splitfunction(
                                  item._id
                                )}`}
                                className="invoice-action-edit"
                              >
                                <i className="material-icons">edit</i>
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllProviders;
