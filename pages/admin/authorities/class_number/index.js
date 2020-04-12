import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { GET_CLASS_NUMBER } from '../../../../graphql/queries/admin/authorities/class_number.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import SearchClassNumberComponent from '../../../../components/admin/authorities/class_number/SearchClassNumberComponent';
import ListClassNumberComponent from '../../../../components/admin/authorities/class_number/ListClassNumberComponent';
import { CardContent, Card } from '@material-ui/core';

const ClassNumberPage = () => {

    const [getClassNumberAllFields, ClassNumberResponse] = useLazyQuery(GET_CLASS_NUMBER);
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Class bumber" />
            <Card  >
                <CardContent>
                    <SearchClassNumberComponent getClassNumberAllFields={getClassNumberAllFields} />
                </CardContent>
            </Card>
 
            <Card  >
                <CardContent>
                    <h4 className="card-title">Recherche : Sub-Series</h4>
                    {ClassNumberResponse.error ? <div color="danger">{String(ClassNumberResponse.error.message)}</div> : null}
                    {ClassNumberResponse.data &&
                        <ListClassNumberComponent class_numbers={ClassNumberResponse.data.class_number} />
                    }
                </CardContent>
            </Card>
        </div>
    );
};


ClassNumberPage.Layout = AdminLayout

export default ClassNumberPage;
