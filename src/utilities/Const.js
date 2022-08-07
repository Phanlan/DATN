// eslint-disable-next-line import/no-anonymous-default-export
export default {
  API: {
    BaseURL: 'http://localhost:8080',
    // BaseURL: 'http://10.10.5.232:8080',
    //BaseURL: 'https://gstest.olbius.com',
    // Login: '/rest/s1/gsources/login',
    // Logout: '/rest/logout',

    // gsources common api
    GetCompany: '/public-api/v1.0.0/company',
  },
  RESPONSE_CODES: {
    SUCCESS: {
      SUCCESS: 200,
    },
    ERROR: {
      INTERNAL_SERVER: 500,
      NOT_FOUND: 404,
    },
  },
  GGMAPS: {
    // key: 'AIzaSyCn-lJMCW0MBvwGh73tXDWtHWy4mhsbgmk'
    key: 'AIzaSyCHu4vQUKFsMnqpjk_HHjIIAU_yejvT5cs'
  },
  COLOR: [
    '#AC9328', '#223447', '#9603B0', '#3EF849', '#889966', '#3657EB', '#698B4B', '#A98B32', '#BEDFA0', '#DD659F',
    '#90B68F', '#78BD76', '#8D7A5B', '#62D771', '#9F233E', '#05E9D8', '#4E5E8C', '#55FE17', '#14C0D4', '#797030',
    '#22EA4E', '#3DCABB', '#9D5339', '#2EE378', '#3C86BA', '#98DC19', '#9CE80C', '#BE2500', '#BE6B26', '#DABC25',
    '#8DBA3E', '#B71580', '#B4877D', '#925CD4', '#A39ABF', '#285006', '#6C76AB', '#3BC667', '#13F42B', '#9C874A',
  ],
  LIGHTCOLOR: [
    '#BC9328', '#323447', '#A603B0', '#4EF849', '#989966', '#4657EB', '#798B4B', '#B98B32', '#CEDFA0', '#ED659F',
    '#A0B68F', '#88BD76', '#9D7A5B', '#72D771', '#AF233E', '#15E9D8', '#5E5E8C', '#65FE17', '#24C0D4', '#897030',
    '#32EA4E', '#4DCABB', '#AD5339', '#3EE378', '#4C86BA', '#A8DC19', '#ACE80C', '#CE2500', '#CE6B26', '#EABC25',
    '#9DBA3E', '#C71580', '#C4877D', '#A25CD4', '#B39ABF', '#385006', '#7C76AB', '#4BC667', '#23F42B', '#AC874A',
  ]
};