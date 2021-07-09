import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
   
    useEffect(()=>{ //solo se dispara una vez
        getGifs(category)
            .then(imgs =>{

    
                setState({
                    data:imgs,
                    loading:false
                });
       
               
            });
    },[category]) //arreglo de dependencias
    
    return state;
}

