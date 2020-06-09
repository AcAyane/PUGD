import React from 'react'
import AdminLayout from '../../../../../components/adminLayout'

const ListDoc = props => {

    return <React.Fragment>

        <div className="row">
            <div className="col s12 m12 l12">
                <div className="row vertical-modern-dashboard">

                    <div className="col s12 m8 l8 animate fadeLeft">
                        <div className="card">
                            <div className="card-content">
                                <h4 className="card-title mb-0">Détails Emprunteur </h4>

                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">Barecode</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>


                                    </tr>

                                    </tbody>
                                </table>

            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
}
ListDoc.Layout = AdminLayout
export default ListDoc
