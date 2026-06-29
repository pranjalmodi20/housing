import React from 'react';
import PortalLandingPage from '../../components/common/PortalLandingPage';
import { portalPages } from '../../data/portalPages';

const Plots = () => <PortalLandingPage page={portalPages['plots-land']} showSearchBox={false} />;

export default Plots;
