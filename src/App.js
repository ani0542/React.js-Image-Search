import React, { Component } from 'react'
import Imagesearch from './Imagesearch/Imagesearch';
import Imagelist from './ImageList/Imagelist';

const API_KEY='17157184-aab540e6baa31c7b1388d849c';


 class App extends Component {
     
    state={
        images:[],
        
    }
    handlerequest=async (e)=>{
       e.preventDefault()
       let search=e.target.searchvalue.value;

       const url=`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo`;
       
     const request= await fetch(url);

     const response= await request.json()
    //  console.log(response.hits)
     this.setState({
         images:response.hits,
          
     })
    //  console.log(search)
    //  console.log(this.state.images)
     
    }
   
    

    
   
     //we are this.state.images.length>0 doing this because we dont want to map into an empty array
    render() {
        
        return (
            <div>
                    
                    <Imagesearch handlerequest={this.handlerequest}/>
                     <Imagelist images={this.state.images}/>
            </div>
        )
    }
}


export default App;


