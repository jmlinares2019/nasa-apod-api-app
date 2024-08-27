import { useEffect, useState } from "react"

import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleShow() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData(){
      const API_KEY = 'DNhGCawYAHc4F78tMxypWtDq2ybahAuW32a8pD3O'
      // const API_KEY = import.meta.env.NASA_API_KEY; <-- not working!!!
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log('DATA\n', apiData)
      } catch(err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      <div className="App">
        {data ? <Main data={data} /> : (
          <div className="loadingState">
            <i className="fa-solid fa-gear"></i>
          </div>
        )}
        {showModal && 
          <Sidebar
            data={data} 
            onHandleClick={handleShow} />}
        {data && 
        <Footer
          data={data} 
          onHandleClick={handleShow} />}
      </div>
    </>
  )
}

export default App
