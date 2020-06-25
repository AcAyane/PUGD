import React from 'react'
import {useMutation, useQuery} from "@apollo/react-hooks";
import {GetOneCopy} from "../../../../../graphql/queries/admin/Ciruclation/Copies.query";
import {useRouter} from "next/router";
import {DELETE_COPY} from "../../../../../graphql/mutations/admin/circulation/Copies.mutations"
import {GetAllProviders} from "../../../../../graphql/queries/acquisition/provider";
import {FullDate} from "../../../../../shared/_herlpersCirculation/_helpers";




const PretTable  = (props) =>  {
    const {All_Pret} = props
    const {title} = props

/*
    const router = useRouter()
    const BareCode = router.query.BareCode;*/
    console.log("All_Pret form PretTable.js ",All_Pret)
    /*const { loading, error, data } = useQuery(GetOneCopy, {
        variables: {BareCode: BareCode},
    });
    const [deleteOneCopy] = useMutation(DELETE_COPY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
*/

   /* const onHandlerProlongation = () =>{
        console.log("prolongation")
    }*/

    return <React.Fragment>
            <div className="row">
                <a href="#" className="float-left">
                    <h5 className="display-inline">
                        {title}
                    </h5>
                </a>
                <span className="chip teal text-lighten-2 accent-4 float-right">Disponible à pret</span>
            </div>
            <div>
                <table className="table table-bordered">

                    <thead>
                    <tr>
                        <th>Bare code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Support & COTE</th>
                        <th scope="col">Localisation & Section</th>
                        <th scope="col">Date Pret & Retour Initial</th>

                        <th scope="col">PROLONGATION</th>



                    </tr>
                    </thead>
                    <tbody>
                    { All_Pret != null || All_Pret !== undefined ?  All_Pret.map((item) => (
                        <tr key={item.Copy.BareCode} >
                            <td><span>{item.Copy.BareCode}</span></td>
                            <td>
                                <div className="chip task display-bloc text-darken-1">
                                    <img src="https://cdn.pixabay.com/photo/2015/11/22/15/09/hummingbird-1056383_1280.jpg"
                                         alt="Materialize"/>
                                    {item.Copy.Record.Title}
                                </div>
                            </td>
                            <td>
                                <span className="chip center white-text deep-purple  task display-block">{item.Copy.MediaType.media_types_name}</span>
                                <span className="chip center teal white-text task display-block">{
                                    item.Copy.Cote  ? item.Copy.Cote : "-"
                                }</span>
                            </td>
                            <td>
                                <span className="chip center white-text light-blue darken-4 display-block">{item.Copy.Section.section_name}</span>
                                <span className="chip center teal white-text task display-block">{item.Copy.Localisation.Name}</span>

                            </td>
                            <td>
                                <span className="chip center whit black-text task display-block"><b>{FullDate(item.date_init)}</b></span>
                                <span className="chip center whit black-text task display-block"><b>{FullDate(item.Date_Retour)}</b></span>
                            </td>
                            <td>

                                <button className="btn waves-effect waves-light blue darken-2" type="submit" >
                                    Prolonger

                                </button>

                                {/*<span className="chip center teal white-text task display-block">
                            <b>{FullDate(item.Date_Retour)}</b>
                        </span>*/}
                            </td>


                            {/*<a
                        href="#"
                        className="invoice-action-view mr-4"
                        onClick={(e) => {
                            deleteOneCopy({
                                variables: { _id: splitfunction(item._id) },
                                refetchQueries: [
                                    { query: copy},
                                ],
                            });
                        }}
                    >
                        <i className="material-icons">delete</i>
                    </a>
                    <a
                        href={`/admin/circulation/Circulations/pretDoc/UpdateBorrowers?id=${(
                            item._id
                        )}`}
                        className="invoice-action-edit"
                    >
                        <i className="material-icons">edit</i>
                    </a>*/}
                        </tr>
                    ) ): <p></p> }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
}
export default PretTable;
