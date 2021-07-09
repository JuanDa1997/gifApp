import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import Masonry from 'react-masonry-css'

const GifGrid = ({category}) => {

    const {data:images,loading}= useFetchGifs(category);

    const breakpoints ={
        default:4,
        1100: 2,
        700: 1,
        // 500:1
    }

    return (
        <div className="container" >
            {/* <h3 className="animate__animated animate__backInDown">{category}</h3> */}
            {loading && <p className="animate__animated animate__pulse">Loading</p>}   
            <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                 
                {
                    images.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}//envio cada una de las propiedades
                        />  
                    ))
                }
                
                
            </Masonry>
        </div>
        
    )
}

export default GifGrid
