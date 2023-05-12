import React from 'react';
import JournalTabs from './JournalTabs';

const JournalInfo = ({ info }) => {
    return (
        <>
           <h2>{info.journal_name}</h2>
           <JournalTabs />
        </>
    );
}

export default JournalInfo;