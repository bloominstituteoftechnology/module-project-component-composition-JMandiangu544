import React, { useState, useEffect } from 'react'
import { Axios } from 'axios'

const api_key = 'DEMO_KEY'
const URL = "https://api.nasa.gov/planetary/apod?api_key=${api_key}"

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      Axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchPhoto()
    setApod({
      "date":-"2023-06-29", 
      "explanation": "Monitoring 68 pulsars with very large radio telescopes, the North America",
      "hdurl": "https://apod.nasa.gov/apod/image/2306/Gwb_Nanograv_3000_annotated.jpg", 
      "media_type": "image", 
      "service_version": "vl", 
      "title": "A Message from the Gravitational Universe", 
      "url": "https://apod.nasa.gov/apod/image/2306/Gwb_Nanograv_960_annotated.jpg"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <p>
      { apod.explanation }
    </p>
  )
}

export default App
