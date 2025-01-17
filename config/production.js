module.exports = {
  API: {
    V2: 'https://api.topcoder.com/v2',
    V3: 'https://api.topcoder.com/v3',
    V4: 'https://api.topcoder.com/v4',
    V5: 'https://api.topcoder.com/v5',
  },
  AUTH0: {
    DOMAIN: 'topcoder.auth0.com',
  },
  CDN: {
    PUBLIC: 'https://community-app-cdn.topcoder.com',
  },
  COOKIES: {
    MAXAGE: 7,
    SECURE: true,
  },
  LOG_ENTRIES_TOKEN: '',
  SERVER_API_KEY: 'aa9ccf36-3936-450c-9983-097ddba51bef',
  GOOGLE_ANALYTICS_ID: 'UA-6340959-1',
  URL: {
    ARENA: 'https://arena.topcoder.com',
    APP: 'https://community-app.topcoder.com',

    /* This is the same value as above, but it is used by topcoder-react-lib,
     * as a more verbose name for the param. */
    COMMUNITY_APP: 'https://community-app.topcoder.com',
    CHALLENGES_URL: 'https://www.topcoder.com/challenges',

    AUTH: 'https://accounts-auth0.topcoder.com',
    BASE: 'https://www.topcoder.com',
    HOME: '/home',
    COMMUNITY: 'https://community.topcoder.com',
    FORUMS: 'https://apps.topcoder.com/forums',
    FORUMS_VANILLA: 'https://discussions.topcoder.com',
    HELP: 'https://www.topcoder.com/thrive/tracks?track=Topcoder&tax=Help%20Articles',
    SUBMISSION_REVIEW: 'https://submission-review.topcoder.com',
    MEMBER: 'https://member.topcoder.com',
    ONLINE_REVIEW: 'https://software.topcoder.com',
    PAYMENT_TOOL: 'https://payment.topcoder.com',
    STUDIO: 'https://studio.topcoder.com',
    IOS: 'https://ios.topcoder.com',

    /* Connector URL of the TC accounts App. */
    ACCOUNTS_APP_CONNECTOR: 'https://accounts-auth0.topcoder.com/',
    TCO17: 'https://tco17.topcoder.com/',
    TCO19: 'https://tco19.topcoder.com/',

    TOPGEAR: 'https://topgear-app.wipro.com',

    COMMUNITY_API: 'http://localhost:8000',

    COMMUNITIES: {
      BLOCKCHAIN: 'https://blockchain.topcoder.com',
      COGNITIVE: 'https://cognitive.topcoder.com',
      ZURICH: 'https://zurich.topcoder.com',
      COMCAST: 'https://comcast.topcoder.com',
      CS: 'https://cs.topcoder.com',
    },
    EMAIL_VERIFY_URL: 'http://www.topcoder.com/settings/account/changeEmail',
    THRIVE_FEED: 'https://topcoder.com/api/feeds/thrive',
  },
  /* Filestack configuration for uploading Submissions
   * These are for the production back end */
  FILESTACK: {
    SUBMISSION_CONTAINER: 'topcoder-submissions-dmz',
  },

  ACCOUNT_MENU_SWITCH_TEXT: {
    title: 'Switch to BUSINESS',
    href: 'https://connect.topcoder.com',
  },
  HEADER_MENU: [
    {
      id: 'business',
      title: 'BUSINESS',
      href: 'https://www.topcoder.com',
    },
    {
      id: 'community', // required for 'Switch to BUSINESS' to work
      title: 'COMMUNITY',
      secondaryMenu: [
        {
          id: 'home',
          title: 'Home',
          href: '/home',
          logged: true,
        },
        {
          id: 'myprofile',
          title: 'My Profile',
          href: '/members/willFilledByUserName',
          logged: true,
        },
        {
          title: 'Payments',
          href: 'https://community.topcoder.com/PactsMemberServlet?module=PaymentHistory&full_list=false',
          logged: true,
          openNewTab: true,
        },
        {
          title: 'Overview',
          href: '/community/learn',
          logged: false,
        },
        {
          title: 'How It Works',
          href: '/thrive/tracks?track=Topcoder',
          logged: false,
        },
      ],
      subMenu: [
        {
          title: 'Compete',
          subMenu: [
            {
              title: 'All Challenges',
              href: '/challenges',
            },
            {
              title: 'Competitive Programming',
              href: '/community/arena',
            },
            {
              title: 'Gig Work',
              href: '/gigs',
            },
            {
              title: 'Practice',
              href: '/community/practice',
            },
          ],
        },
        {
          title: 'Tracks',
          subMenu: [
            {
              title: 'Competitive Programming',
              href: '/thrive/tracks?track=Competitive%20Programming',
            },
            {
              title: 'Data Science',
              href: '/thrive/tracks?track=Data%20Science',
            },
            {
              title: 'Design',
              href: '/thrive/tracks?track=Design',
            },
            {
              title: 'Development',
              href: '/thrive/tracks?track=Development',
            },
            {
              title: 'QA',
              href: '/thrive/tracks?track=QA',
            },
          ],
        },
        {
          title: 'Explore',
          subMenu: [
            {
              title: 'TCO',
              href: '/community/member-programs/topcoder-open',
            },
            {
              title: 'Programs',
              href: '/community/member-programs',
            },
            {
              title: 'Forums',
              href: 'https://discussions.topcoder.com',
            },
            {
              title: 'Statistics',
              href: '/community/statistics',
            },
            {
              title: 'Blog',
              href: 'https://www.topcoder.com/blog',
              openNewTab: true,
            },
            {
              title: 'Thrive',
              href: '/thrive',
            },
          ],
        },
        {
          title: 'Discord',
          href: 'https://discord.gg/topcoder',
          openNewTab: true,
        },
      ],
    },
  ],
  HEADER_MENU_THEME: 'light',
  HEADER_AUTH_URLS: {
    href: 'https://accounts-auth0.topcoder.com?utm_source=community-app-main',
    location: 'https://accounts-auth0.topcoder.com?retUrl=%S&utm_source=community-app-main',
  },
  ACCOUNT_MENU: [
    {
      title: 'Settings',
      href: '/settings/profile',
    },
    { separator: true },
    {
      title: 'Help',
      href: 'https://www.topcoder.com/thrive/tracks?track=Topcoder&tax=Help%20Articles',
    },
    { separator: true },
    {
      title: 'Log Out',
      href: 'https://www.topcoder.com/logout',
    },
  ],
  // Config for TC EDU - THRIVE
  TC_EDU_BASE_PATH: '/thrive',
  TC_EDU_TRACKS_PATH: '/tracks',
  TC_EDU_ARTICLES_PATH: '/articles',
  TC_EDU_SEARCH_PATH: '/search',
  TC_EDU_SEARCH_BAR_MAX_RESULTS_EACH_GROUP: 3,
  ENABLE_RECOMMENDER: true,
  PLATFORM_SITE_URL: 'https://platform.topcoder.com',
};
