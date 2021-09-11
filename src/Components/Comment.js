import React, { Component } from 'react'
import faker from 'faker'
export class Comment extends Component {

    // constructor(props){
    //     super();
    // }

    render() {
        var currentdate = new Date();
        var dateTimes = + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        return (
            <>
                <div className='ui container comment'>
                    <a className="avatar">
                        <img src={faker.image.avatar()} alt="avatar" />
                    </a>
                    <div className="content">
                        <a className="author">
                           {this.props.name}
                        </a>
                        <div className="metadata">
                            <span className="date"> Today at: {dateTimes}</span>
                        </div>
                        <div className="text"> {this.props.content}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Comment
