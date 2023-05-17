import React, { createContext, useState } from 'react';
import JournalTabs from './JournalTabs';
import { JournalInfoContext } from './Contexts';


const JournalInfo = ({ info }) => {
    return (
        <>
           <h2>{info.journal_name}</h2>
            <JournalInfoContext.Provider value={info}>
                <JournalTabs journalContext={JournalInfoContext} />
            </JournalInfoContext.Provider>
        </>
    );
}

export default JournalInfo;