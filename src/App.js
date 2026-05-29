import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseConverter from './BaseConverter';

function App() {
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/number-base-conversion" element={<BaseConverter />} />
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;