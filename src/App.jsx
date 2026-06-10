
import { Routes, Route } from "react-router-dom"

import NewWizardPage from "./pages/NewWizardPage"
import NewSocietyPage from "./pages/NewSocietyPage"
import WizardListPage from "./pages/WizardListPage"
import SocietyDetailsPage from "./pages/SocietyDetailsPage"

function App() {

  

  return (
    <div>
      <Routes>
        <Route path='/' element = {<NewWizardPage />}/>
        <Route path='/societies/create' element={<NewSocietyPage />} />
        <Route path='/wizards/allwizards' element={<WizardListPage />} />
        <Route path='/societies/:societyId' element={<SocietyDetailsPage />} />
      </Routes>

    </div>
  )
}

export default App
