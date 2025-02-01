import ListRequestComponent from "./components/ListRequestComponent/ListRequestComponent"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequestPage from "./pages/RequestPage/RequestPage"


function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/requests' element={<ListRequestComponent />} />
        <Route path="/requests/:id" element={<RequestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
