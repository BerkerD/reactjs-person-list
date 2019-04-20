import React from 'react'
import './Breadcrumb.css'

const Breadcrumb = (props) => {

    return <div>
        <h4 className="Breadcrumb-text"><b>{props.title}</b></h4>
        <hr/>
    </div>

};

export default Breadcrumb
