import React, { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'

export default function ImageSlider({ url, limit = 10, page = 2 }) {

  //react component which gets 3 props.

  const [images, setImages] = useState([]) // array to save the recieved images from API
  const [currentSlide, setCurrentSlide] = useState(0) //index of the currently-shown-image on the slide... 0 means the 1st image of array
  const [errorMsg, setErrorMsg] = useState(null) //saving any error when recieving the data
  const [loading, setLoading] = useState(false) // a boolean to show if the data is loading or not?

  async function fetchImages(getUrl) { // (getUrl) => we are passing the true URL to the function
    //asynchronus function which gets the data from URL and adds parameters (page and limit) to the URL
    try { // this block is used to execute the main code (get data from a URL) if there was no problem
      setLoading(true) // shows that the data is loading (maybe shows a message to users [ui])
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      /* 
        fetch is used for sending request to URL. this URL combines with page and limit 
        await is used to make the function wait for the response of request. it is saved in response
      */
      const data = await response.json() //after fetching the data from server...this response is saved in data and turns into JSON format. here await is also used to prevent executing the code before the data is ready.
      if (data) {
        setImages(data)
        setLoading(false)
        //if data exists, setImage(data), and setLoading(false) means it saves the data(images) in images variable and makes the loading(false) to show the uploading is finished
      }
    } catch (e) { //if anything goes wrong in try, catch block executes. 
      setErrorMsg(e.message)
      setLoading(false)
      // e.message gets saved in errorMsg variable. and loading is false due to the uploading is finished
    }
  }
  /* SUMMARY OF FETCHIMAGES FUNCTION:  
    so this function is for getting the data(images) of a URL. it uses fetch to send request to the server and turns the response into JSON. when 
    getting the data ... loading mode turns on (true)... and after getting the data successfully or Failed this state ends and turns back into false. fetched data saves in images STATE and then every error saves in errorMsg STATE. 
  */



  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 /* if the index of current slide is 0 => find the length of the images array. which in this case is 10... and then -1 then u get the index of the last image of array. so if the length is 10 - 1 = 9...9 is the index of the last image of array. */ : currentSlide - 1 /* <= in normal situation */)
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 /* if the index of the currentslide was 9 (images.length - 1 = 9) => give 0 index (which is the first image.) */ : currentSlide + 1 /* <= in normal situation just go forward and add +1 */)
  }



  useEffect(() => {
    if (url !== '') fetchImages(url) // if url is not empty/ it will call the fetchImages(url) 
  }, [url] /* the only dependancie of this useEffect is {url} and the function will be called only when the url changes */)
//this function helps to update the changed images and url s in the component. if url changes, it also updates

  console.log(images)

  if (loading) {
    return <div>Loading data ! Please wait</div>
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg} </div>
  }

  return (
    <div className="flex-column justify-center align-center margin">
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {
          images && images.length /* image exists and the length is > 0 ? */
            ? images.map((imageItem, index /* index is the position of each image in the array */) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index /* if current slide equals the index of the image? */ ? "current-image" : "current-image hide-current-image"}
              />
            ))
            : null
        }
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {
            images && images.length
              ? images.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)} //when clicked, it upadates the currentSlide with the new clicked index
                  className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                >

                </button>)
              : null
          }
        </span>
      </div>
    </div>

  )
}