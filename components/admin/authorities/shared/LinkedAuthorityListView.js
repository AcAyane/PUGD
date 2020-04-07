import React from 'react';

import LinkedAuthorityView from '../../../../components/admin/authorities/shared/LinkedAuthorityView';
import { Card, CardContent } from '@material-ui/core';



const LinkedAuthorityListView = ({ Linked_authorities, OnAuthorityLinkChange }) => {



    return <Card  >
        <CardContent>
   
            {
                Linked_authorities.map(((authority, index) => {
                    return <LinkedAuthorityView
                        key={index}
                        Authority={authority}
                        OnAuthorityLinkChange={OnAuthorityLinkChange}
                        index={index}
                    />
                }))
            }
  

        </CardContent>
    </Card>

}
export default LinkedAuthorityListView