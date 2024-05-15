import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EgovHeader from '../compoenents/EgovHeader'
import EgovFooter from '../compoenents/EgovFooter'
import EgovMain from '../pages/main/EgovMain'
import URL from '../constants/url'

const RootRoutes = () => {
    return (
        <BrowserRouter>
            <EgovHeader />
            <Routes>
                {/* main */}
                <Route path={URL.MAIN} element={<EgovMain />} />
            </Routes>
            <EgovFooter />
        </BrowserRouter>
    )
}

export default RootRoutes
