import { useEffect, useState } from "react"

import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleShow() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData(){
      const API_KEY = 'DNhGCawYAHc4F78tMxypWtDq2ybahAuW32a8pD3O'
      // const API_KEY = import.meta.env.NASA_API_KEY <-- not working!!!; 
      console.log(API_KEY)
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-APOD-API-${today}`
      // if localKey already exist in localStorage ... 
      if (localStorage.getItem(localKey)){
        // ... read its value (parsing it as an object)
        const apiData = JSON.parse(localStorage.getItem(localKey))
        // and set it as const 'data'
        setData(apiData);
        console.log("Fetched from localStorage")
        console.log(localStorage)
        return
      }
      localStorage.clear();

      try{
        const res = await fetch(url)
        const apiData = await res.json()
        // saving apiData in localStorage with key 'localKey' (as a string)
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('DATA\n', apiData)
        console.log("fetched from the API today")
      } catch(err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      <div className="App">

        {data ? 
          <Main 
            data={data} 
            showModal={showModal} 
            onHandleClick={handleShow} 
          />
        : 
          (
            <div className="loadingState">
            <i className="fa-duotone fa-solid fa-spinner"></i>
            </div>
          )
        }

        <Sidebar 
            showModal={showModal}
            data={data}
            onHandleClick={handleShow}
        />  

        {data && 
        <Footer
            data={data} 
            onHandleClick={handleShow} 
        />}

      </div>
    </>
  )
}

export default App
