import {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Akame Ga Kill']);

    // const handleAdd = () => {
    //     //setCategories(['HunterXHunter', ...categories]); otra forma
    //     //setCategories(cats => [ ...cats, 'HunterXHunter']);
    //     setCategories(categories.concat('One Piece')); //add element to array
    // }

    return (
        <>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => ( 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
