import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import TextBox from "../../../../../components/ui/TextBox";
import Button from "../../../../../components/ui/Button";
import Card from "../../../../../components/ui/card/card";
import {useLazyQuery} from "@apollo/react-hooks";
import {EXAMPLAIR_BY_CODE} from "../../../../../graphql/queries/admin/Ciruclation/Examplaire.query";
import Examplaire from "./Examplaire";


const visual = () => {

    const nul = <span style={{color:'#d60e28'}}>No Group finder</span>;

    const [copy, { loading, error, data }] = useLazyQuery(EXAMPLAIR_BY_CODE);

    const [name, setName] = useState('');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (data !== nul || data !== undefined){
        console.log(data)
    }

    const onSearchHandler = (e) => {

        e.preventDefault();
        copy({
            variables: {
                name: name,
            }
        });
    }
    return <div className="container">
                <div className="row">
                    <div className="col s12">
                        <form>
                            <Card >
                                <h5>Examplaire</h5>
                                <span>Recherche un Examplaire</span>
                                <div className="row display-flex">
                                    <TextBox
                                        label="Code Bar Examplaire"
                                        type="text"
                                        onChange={event => { setName(event.target.value) }}
                                        value={name}
                                    />
                                    <Button
                                        onClick={onSearchHandler}
                                        rounded={4}>Search</Button>

                                </div>
                            </Card>
                        </form>

                        <Examplaire/>
                    </div>
                </div>
    </div>
}
visual.Layout = AdminLayout
export default visual
