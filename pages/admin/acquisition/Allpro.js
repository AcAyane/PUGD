import React, { Component } from "react";
import { withApollo } from "../../../shared/apollo";
import { Query, Mutation } from "react-apollo";
import { GetAllProviders } from "../../../graphql/queries/acquisition/provider";
import { DeleteProvider } from "../../../graphql/mutations/acquisition/provider";
import { Table } from "reactstrap";
import { Router } from "next/router";
import Pagination from "../../../components/pagination";

class Allpro extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      nameSearch: "",
      currentPageNumber: 1,
      ProviderPerPage: 4,
    };
  }

  //convert from object id to string
  splitfunction = (e) =>
    e
      .split("(")[1]
      .split(")")[0]
      .replace(/^"(.*)"$/, "$1");

  handlePageChange(pageNumber) {
    this.setState({ currentPageNumber: pageNumber });
  }

  render() {
    const currentPageNumber = this.state.currentPageNumber;
    const ProviderPerPage = this.state.ProviderPerPage;
    return (
      <div className="container">
        {/* submodule Title Crad */}
        <div className="col s12">
          <div className="card card-tabs">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card-title">
                    <h4>Purchasing Management : Providers</h4>
                  </div>
                </div>
                <div className="col s12 m6">
                  <button
                    className="rightButton"
                    onClick={() =>
                      (window.location.href = `/admin/acquisition/AddProvider`)
                    }
                  >
                    Add Provider{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*=== get Providers using GetAllProviders query=== */}
        <Query query={GetAllProviders}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `couldn't fetch data`;

            //get current providers
            const lastindex = currentPageNumber * ProviderPerPage;
            const firstindex = lastindex - ProviderPerPage;

            //search function
            let filtredProviders = data.getallproviders.filter((item) => {
              return (
                item.establishement
                  .toLowerCase()
                  .indexOf(this.state.search.toLowerCase()) >= 0 &&
                item.name
                  .toLowerCase()
                  .indexOf(this.state.nameSearch.toLowerCase()) >= 0
              );
            });

            const currentpro = filtredProviders.slice(firstindex, lastindex);
            return (
              //List of providers with a Search input
              <div className="col s12">
                <div className="card card-tabs">
                  <div className="card-content">
                    {/* Search input*/}
                    <div className="card-title">
                      <h4>Search Provider</h4>
                    </div>
                    <br />
                    <div className="row">
                      <br />
                      <div className="col s12 m6">
                        <h6>By Establishement </h6>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Establishement"
                          value={this.state.search}
                          onChange={(e) =>
                            this.setState({ search: e.target.value })
                          }
                        ></input>
                      </div>
                      <div className="col s12 m6">
                        <h6>By Name </h6>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          value={this.state.nameSearch}
                          onChange={(e) =>
                            this.setState({ nameSearch: e.target.value })
                          }
                        ></input>
                      </div>
                    </div>
                    <br></br>
                    <div className="row">
                      <div className="col s12">
                        <div className="card-title">
                          <h5>List</h5>
                        </div>
                        {/*List of providers */}
                        <Table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Adress</th>
                              <th>Phone</th>
                              <th>Establishement</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentpro.map((item) => (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.adress}</td>
                                <td>{item.phone}</td>
                                <td>{item.establishement}</td>
                                <td>
                                  <button
                                    className="buttonup"
                                    onClick={() =>
                                      (window.location.href = `/admin/acquisition/UpdateProvider?id=${this.splitfunction(
                                        item._id
                                      )}`)
                                    }
                                  >
                                    update
                                  </button>
                                </td>
                                <td>
                                  {/* === delete provider using DeleteProvider mutation ===*/}
                                  <Mutation
                                    mutation={DeleteProvider}
                                    // update the cache after removing a raw
                                    update={(cache) => {
                                      const dataP = cache.readQuery({
                                        query: GetAllProviders,
                                      });
                                      const newData = {
                                        getallproviders: data.getallproviders.filter(
                                          (t) =>
                                            this.splitfunction(t._id) !==
                                            this.splitfunction(item._id)
                                        ),
                                      };
                                      cache.writeQuery({
                                        query: GetAllProviders,
                                        data: newData,
                                      });
                                    }}
                                  >
                                    {(deleteProvider) => {
                                      const remove = () => {
                                        deleteProvider({
                                          variables: {
                                            _id: this.splitfunction(item._id),
                                          },
                                        });
                                      };
                                      return (
                                        <button
                                          className="deletebutton"
                                          onClick={remove}
                                        >
                                          delete
                                        </button>
                                      );
                                    }}
                                  </Mutation>
                                  {/*=== end of DeleteProvider mutation  ===*/}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <Pagination
                            postsPerPage={ProviderPerPage}
                            totalPosts={data.getallproviders.length}
                            paginate={this.handlePageChange.bind(this)}
                          ></Pagination>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Query>
        {/*=== end of GetAllProviders query  ===*/}
      </div>
    );
  }
}
export default withApollo({ ssr: true })(Allpro);
