import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Turbonomic Site',
    href: 'https://www.ibm.com/products/turbonomic',
  },

  {
    title: 'Turbonomic Documentation',
    href: 'https://www.ibm.com/docs/en/SSFV9Z_8.6.0/pdfs/IBMTurbonomic_8.6.0.pdf',
  },
 {
    title: 'IBM AIOps Site',
    href: 'https://www.ibm.com/cloud/aiops',
  },
  {
    title: 'PTEG - Partner Enablement',
    href: 'https://ibm.seismic.com/Link/Content/DCGdFfFmRb3Rb8TRTHhHPXjbCDWj',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
