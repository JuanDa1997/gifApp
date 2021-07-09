import {useState} from 'react'
import propTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
        
    }

    const handleSubmit = (e) => {
        //Cambiar el estado de una caja de selección es 
        //la función por defecto de la acción de hacer 
        //clic sobre la caja. Este ejemplo ilustra como 
        //hacer que esto no ocurra:
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats=> [inputValue, ...cats]);
            setinputValue('');

        }

        

    }

    return (
        <>
            
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo01" >
                    <a className="navbar-brand" href="#">Hidden brand</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                        <input 
                            style={{height:"20px"}}
                            className="form-control mr-sm-2" 
                            type="search" placeholder="Search" 
                            aria-label="Search" 
                            value={inputValue}
                            onChange={handleInputChange} 

                        />
                    </form>
                </div>
            </nav>
            
        </>  
    )
}

//Se indica setCategories es una funcion requerida
//pa este componente

AddCategory.prototype = {
    setCategories: propTypes.func.isRequired
}

export default AddCategory;