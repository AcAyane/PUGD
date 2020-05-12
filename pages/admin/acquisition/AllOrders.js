import React, { Component } from "react";
import { Table } from "reactstrap";
import { withApollo } from "../../../shared/apollo";
import { Query } from "react-apollo";
import { GetOrders } from "../../../graphql/queries/acquisition/order";
import Pagination from "../../../components/pagination";

export class AllOrders extends Component {
  constructor() {
    super();
    this.state = {
      searchEstablishement: "",
      searchProvider: "",
      currentPageNumber: 1,
      QuotationPerPage: 4,
    };
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPageNumber: pageNumber });
  }
  render() {
    const currentPageNumber = this.state.currentPageNumber;
    const QuotationPerPage = this.state.QuotationPerPage;
    return (
      <div>
        {" "}
        {/* ====Card Title====*/}
        <div className="col s12">
          <div className="card card-tabs">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card-title">
                    <h4>Purchasing Management : Orders</h4>
                  </div>
                </div>
                <div className="col s12 m6">
                  <button
                    className="rightButton"
                    onClick={() =>
                      (window.location.href = `/admin/acquisition/AddQuotations`)
                    }
                  >
                    New Order{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==== End of Card Title====*/}
        <Query query={GetOrders} variables={{ type: "order" }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `couldn't fetch data`;

            //search function
            let filtredQuotation = data.getOrders.filter((item) => {
              return (
                item.establishement
                  .toLowerCase()
                  .indexOf(this.state.searchEstablishement.toLowerCase()) >=
                  0 &&
                item.provider
                  .toLowerCase()
                  .indexOf(this.state.searchProvider.toLowerCase()) >= 0
              );
            });
            const lastindex = currentPageNumber * QuotationPerPage;
            const firstindex = lastindex - QuotationPerPage;
            const currentQuotation = filtredQuotation.slice(
              firstindex,
              lastindex
            );

            return (
              <div className="col s12">
                <div className="card card-tabs">
                  <div className="card-content">
                    {/* Search input*/}
                    <div className="card-title">
                      <h4>Search Quotation</h4>
                    </div>
                    <br />
                    <div className="row">
                      <br />
                      <div className="col s12 m6">
                        <h6>By Provider </h6>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Provider"
                          value={this.state.searchProvider}
                          onChange={(e) =>
                            this.setState({ searchProvider: e.target.value })
                          }
                        ></input>
                      </div>
                      <div className="col s12 m6">
                        <h6>By Establishement </h6>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Establishement"
                          value={this.state.searchEstablishement}
                          onChange={(e) =>
                            this.setState({
                              searchEstablishement: e.target.value,
                            })
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
                        <Table>
                          <thead>
                            <tr>
                              <th>Establishement</th>
                              <th>Provider</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentQuotation.map((item) => (
                              <tr>
                                <td>{item.establishement}</td>
                                <td>{item.provider}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                                <td>
                                  <button className="buttonup">Update</button>
                                </td>
                                <td>
                                  <button className="deletebutton">
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <Pagination
                            postsPerPage={QuotationPerPage}
                            totalPosts={data.getOrders.length}
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
      </div>
    );
  }
}

export default withApollo({ ssr: true })(AllOrders);
