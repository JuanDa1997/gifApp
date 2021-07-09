import React from 'react'

const GifGridItem = ({title, url}) => {

    //imagenes que entran de la api
    return (
        <>
            <div className="card animate__animated animate__backInDown">
                <img src={url} alt={title} />
                <p>{title}</p> 
            </div>
            
        </>
      
      
    )
}

export default GifGridItem