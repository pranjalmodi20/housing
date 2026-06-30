import React from 'react';
import PortalLandingPage from '../../components/common/PortalLandingPage';
import { portalPages } from '../../data/portalPages';

const NewLaunch = () => <PortalLandingPage page={portalPages['new-launch']} showSearchBox={false} />;

export default NewLaunch;
