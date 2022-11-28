import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadAnimation from '../resources/assets/animation/loading.json';
import Lottie from 'react-lottie';

const Home = lazy(() => import("../resources/views/Home/Home"));
const Upload = lazy(() => import("../resources/views/Upload/Upload"));
const Share = lazy(() => import("../resources/views/Share/Share"));

export default function RouteBrowser() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Router>
            <Suspense fallback={
                <div className='load'>
                    <div>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                </div>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/upload" element={<Upload />} />

                    <Route path="/upload/:id" element={<Share />} />

                </Routes>
            </Suspense>
        </Router>
    )
}
