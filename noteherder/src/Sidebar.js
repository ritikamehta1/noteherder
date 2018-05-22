import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return(
        <div className="Sidebar">
            <div className ="logo">
                <img src={quill} alt="Noteherder" />
            </div>

            <a> href="/notes">
                <img
                    src={newHover}
                    alt='New note'
                />
                <img
                    src={newIcon}
                    alt='nNew note'
                />
            </a>

            <div className="SignOut">
                <button>
                    <i classname="fa fa-sign-out"></i>
                </button> 
            </div>
        </div>
    )
}

export default Sidebar