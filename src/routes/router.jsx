// src/routes/index.jsx
import { createBrowserRouter } from 'react-router-dom';
import adminRoutes from './AdminRoutes.jsx';
import websiteRoutes from './WebsiteRoutes.jsx';

const router = createBrowserRouter([
    ...websiteRoutes,
    ...adminRoutes
]);

export default router;
