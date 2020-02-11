import React  from 'react'
import Spinner from './Spinner';


const HOC=(WrappedComponent)=>{
    

        class NewHOC extends React.Component {
            render() {
                return(
                   this.props.isLoading? <Spinner/>:<WrappedComponent {...this.props}/>)
                    
                
            }
        }
        return NewHOC
        
    }
    
export default HOC;