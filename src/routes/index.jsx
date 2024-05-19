import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import EgovHeader from '../components/EgovHeader';
import EgovFooter from '../components/EgovFooter';
import EgovMain from '../pages/main/EgovMain';
import URL from '../constants/url';
import { useCallback, useEffect, useRef, useState } from 'react';
import initPage from 'js/ui';

const RootRoutes = () => {
    const [activeTab, setActiveTab] = useState('1'); // 활성화된 탭

    useEffect(() => {
        initPage();
    }, []);

    const handleTabClick = useCallback((e) => {
        e.preventDefault();
        const el = e.target;
        const tabId = el.getAttribute('data-tabid');
        setActiveTab(tabId);
    });

    return (
        <BrowserRouter>
            <EgovHeader />
            <Routes>
                {/* main */}
                <Route path={URL.MAIN} element={<EgovMain />} />
            </Routes>
            <EgovFooter />
        </BrowserRouter>
    );
};

export default RootRoutes;
