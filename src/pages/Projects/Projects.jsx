import React from 'react';
import PortalLandingPage from '../../components/common/PortalLandingPage';
import { portalPages } from '../../data/portalPages';

const Projects = () => <PortalLandingPage page={portalPages.projects} showSearchBox={false} />;

export default Projects;
