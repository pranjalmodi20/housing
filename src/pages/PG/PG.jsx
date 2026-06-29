import React from 'react';
import PortalLandingPage from '../../components/common/PortalLandingPage';
import { portalPages } from '../../data/portalPages';

const PG = () => <PortalLandingPage page={portalPages.pg} showSearchBox={false} />;

export default PG;
