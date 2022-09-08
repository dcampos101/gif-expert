
//La funcion debe estar fuera del componente 
//la ejecucion de una funcion no debe estar dentro de un componente
//porque cuando se renderiza el componente se ejecuta nuevamnete la funcion
//para eso se usa el hook useEffect: sirve para disparar efectos secundarios
//algun proceso cuando algo suceda, categoria cambie quiere disparar un efecto

//import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    console.log({images, isLoading});
    
/*    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = isLoading(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        //getGifs( category );
        getImages();
    }, []) // el hook se dispara solo la primera vez que se cree
*/
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Loading..</h2>)

            }
            <article>
            <section>
            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            //exparciendo todas las props de image
                            { ...image }    
                        />
                    ))
                }
            </div>
            </section>
            </article>
        </>

    )
}
