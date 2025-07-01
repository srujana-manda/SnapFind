import React, { useContext } from 'react'
import pixabayContext from "../context/PixabayContext";


const Images = () => {

    const { image } = useContext(pixabayContext)

    return (
        <>
            <div className="container">
                <div className='flex'>
                    {image.map((data) => (
                        <div key={data.id}>
                            <div className="item">
                                <img src={data.largeImageURL} alt="image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Images