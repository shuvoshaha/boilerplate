import React from 'react'
// import EmptyIcon from '@images/Empty.svg'
import './empty.scss'

const Empty: React.FC = () => {
    return (
        <div className='empty'>
            <div className="empty__body">
                {/* <img src={ EmptyIcon } loading="lazy" alt="empty" /> */}
                <p>No Result Found</p>
            </div>
        </div>
    )
}

export default Empty