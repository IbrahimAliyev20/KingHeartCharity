import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App5 from './App5.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/app2" element={<App2 />} />
    <Route path="/app3" element={<App3 />} />
    <Route path="/app4" element={<App4 />} />
    <Route path="/app5" element={<App5 />} />
    </Routes>
    </BrowserRouter>
)
