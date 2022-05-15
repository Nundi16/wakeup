import React from 'react'

export default function Loading({showcaption}:{showcaption:boolean}) {
    return (
        <div className='loading-container'>
            {showcaption && <h1 className='loading-caption'>Betöltés</h1> }
                
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}