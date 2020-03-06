import React from 'react'
import './List.css'

const List = props => {


    console.log(props)

    return (
        <div>
            <p className="list">
                {
                    props.items.map((item, index) => <li key={index}>{item}<button className="deleteButton">Delete</button></li>)

                }
            </p>
        </div>
    )
}

export default List
