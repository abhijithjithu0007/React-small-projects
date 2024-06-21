import React, { useEffect, useState } from 'react'



const ApiCalls = () => {

    const [state, setState] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetching = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-15&sortBy=publishedAt&apiKey=792361698d374ebc86bf4517decb3606")
                const toJson = await fetching.json()
                setState(toJson.articles)
                console.log(toJson.articles);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()


    }, [setState])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {state.map(item => (
                <div className='w-full mb-4 p-4 bg-white shadow-md rounded-lg'>
                    {item.urlToImage ? (
                        <img
                            className='w-full h-72 object-cover rounded-lg'
                            src={item.urlToImage}
                            alt={item.title}
                        />
                    ) : (
                        <img
                            className='w-full h-72 object-cover rounded-lg'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
                            alt={item.title}
                        />
                    )}

                    <h1 className='mt-4 text-lg font-semibold text-gray-800'>{item.author}</h1>
                    <p className='mt-2 text-base text-gray-600'>{item.title}</p>
                </div>
            ))}
        </div>



    )
}

export default ApiCalls
