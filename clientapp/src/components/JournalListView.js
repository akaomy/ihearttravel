
import React from 'react';
import JournalListItem from './JournalListItem';


const JournalListView  = ({data}) => {
    
    return (
        <>
            {data.user.journals.map((i) => 
                <JournalListItem 
                    key={i.journal_name}
                    name={i.journal_name}
                />
            )}
        </>
    );
}


export default JournalListView;