

import React from 'react';
import JourneysListItem from './JourneyListItem';

const JourneysListView  = ({data}) => {
    console.log(data.user.journals)
    
    return (
        <>
        {/* TODO */}
        {/* {data.user.journals.map((i) => { */}
            <JourneysListItem />
        {/* })} */}
        </>
    );
}


export default JourneysListView;