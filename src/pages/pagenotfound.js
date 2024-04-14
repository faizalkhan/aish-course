import {useNavigate} from "react-router-dom"

export const Pagenotfound = () => {

    const navigate = useNavigate();

    return(

        <> 
        <p> Page Not Found  </p> 
        
        <button onClick={() => navigate('/')}> Go back to home </button>
         </>
    
    )
 
}

