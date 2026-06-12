
import { Routes, Route } from "react-router-dom"

import NewWizardPage from "./pages/NewWizardPage"
import NewSocietyPage from "./pages/NewSocietyPage"
import WizardListPage from "./pages/WizardListPage"
import SocietyDetailsPage from "./pages/SocietyDetailsPage"
import EditWizardPage from "./pages/EditWizardPage"
import WizardDetailPage from './pages/WizardDetailPage'
import WithNavbar from "./components/WithNavbar"
import Homepage from "./pages/Homepage"
import ErrorPage from "./pages/ErrorPage"
import LoaderPreviewPage from "./pages/LoaderPreviewPage"
import LoaderDemoPage from "./pages/LoaderDemoPage"


function App() {



  return (
    <div>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/societies/:societyId' element={<SocietyDetailsPage />} />
          <Route path='/societies/create' element={<NewSocietyPage />} />
          <Route path='/wizards' element={<WizardListPage />} />
          <Route path='/wizards/:wizardId' element={<WizardDetailPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/' element={<LoaderPreviewPage />} />
        <Route path='/loader' element={<LoaderDemoPage />} />
        <Route path='/wizards/create' element={<NewWizardPage />} />
        <Route path='/wizards/:wizardId/edit' element={<EditWizardPage />} />
      </Routes>

    </div>
  )
}

export default App
