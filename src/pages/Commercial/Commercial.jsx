import React from 'react';
import PortalLandingPage from '../../components/common/PortalLandingPage';
import { portalPages } from '../../data/portalPages';

const Commercial = () => <PortalLandingPage page={portalPages.commercial} showSearchBox={false} />;

export default Commercial;
