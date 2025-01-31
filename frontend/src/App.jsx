import ListRequestComponent from "./components/ListRequestComponent/ListRequestComponent"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/requests' element={<ListRequestComponent />} />
        <Route path="/requests/:id" element={<h1>hello</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
