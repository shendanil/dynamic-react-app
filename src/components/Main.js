import React, { useState } from "react"

export default function Main() {

    const [allMemes, setAllMemes] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomUrl: 'https://i.imgflip.com/1otk96.jpg'
    })

    const [textInput, setTextInput] = useState ({
        topText: "",
        bottomText: ""
    })

    function handleChange (event) {
        const {name, value} = event.target
        setTextInput(prevText => ({
            ...prevText,
            [name]: value
        }))
    }
    
    function getMeme () {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevContent => ({
            ...prevContent,
            randomUrl: url
        }))
    }


    return (
        <div className='p-8'>
            <div className='w-full grid grid-cols-2 grid-rows-2 mb-4'>
                <div className='pr-2 w-full'>
                    <input
                        type='text'
                        placeholder='top line'
                        name='topText'
                        value={textInput.topText}
                        onChange={handleChange}
                        className='w-full border-2 rounded-lg p-2 m-0' 
                        />
                </div>
                <div className='pl-2 w-full'>
                    <input
                        type='text'
                        placeholder='bottom line'
                        name='bottomText'
                        value={textInput.bottomText}
                        onChange={handleChange}
                        className='w-full border-2 rounded-lg p-2 m-0'
                    />
                </div>
                <div className='col-span-2 pt-2'>
                    <button onClick={getMeme} id ='button' className='w-full bg-gradient-to-r from-indigo-600 to-pink-400 text-white py-2 px-4 rounded-lg'>Get an edited image!</button>
                </div>
            </div>
            <div className="relative w-full">
                {textInput.topText && <p className="bg-black bg-opacity-50 text-white text-center px-4 py-2 absolute text-2xl top-8 w-full">{textInput.topText}</p>}
                {textInput.bottomText && <p className="bg-black bg-opacity-50 text-white text-center px-4 py-2 absolute text-2xl bottom-8 w-full">{textInput.bottomText}</p>}
                <img alt='' src={meme.randomUrl} className='w-full rounded-lg' />
            </div>
        </div>
    )
}