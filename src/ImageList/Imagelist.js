import React from 'react'
import './Imagelist.css';
export default function Imagelist(props) {
    console.log(props)
    return (
        <div className='container'>
             <div className='row'>
             {
                     props.images.map((value,index)=>{
                             return(<div className='col-md-4' key={index} style={{marginBottom:'2rem'}}>
                                          <div className='imageList__container'>
                                              <img src={value.largeImageURL} alt='error' className='imageList__image'/>
                                          </div>
                                           <div className='image__details'>
                                                <button>view</button>
                                           </div>
                                           
                                 </div>)
    })
}
             </div>
        </div>
    )
}


