

import React from 'react';
import JourneysListItem from './JourneyListItem';

const JourneysListView  = ({data}) => {
    
    return (
        <>
        {data.user.journals.map((i) => 
            <JourneysListItem name={i.journal_name}/>
        )}
        </>
    );
}


export default JourneysListView;