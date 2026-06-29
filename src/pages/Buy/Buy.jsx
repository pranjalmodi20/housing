import React from 'react';
import PortalLandingPage from '../../components/common/PortalLandingPage';
import { portalPages } from '../../data/portalPages';

const Buy = () => <PortalLandingPage page={portalPages.buy} showSearchBox={false} />;

export default Buy;
