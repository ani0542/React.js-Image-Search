import React, { Component } from 'react'
import "./Imagesearch.css"
export default class Imagesearch extends Component {
    
    render() {
        // console.log(this.props.handlerequest)
        return (
            <div className='imageSearch'>
                <form onSubmit={this.props.handlerequest} >
                        <input type='text' placeholder='search for images...' name='searchvalue'  autoComplete='off'/>
                        <button>search</button>
                </form>
                
            </div>
        )
    }
}
