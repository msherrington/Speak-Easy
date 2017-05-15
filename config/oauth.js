module.exports = {
  github: {
    loginURL: 'https://github.com/login/oauth/authorize',
    accessTokenURL: 'https://github.com/login/oauth/access_token',
    profileURL: 'https://api.github.com/user',
    // clientId: process.env.GITHUB_GUNIT_ID,
    // clientSecret: process.env.GITHUB_GUNIT_SECRET,
    clientId: process.env.GITHUB_SPEAKEASY_ID,
    clientSecret: process.env.GITHUB_SPEAKEASY_SECRET,
    scope: 'user:email'
  },
  facebook: {
    loginURL: 'https://www.facebook.com/v2.8/dialog/oauth',
    accessTokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token',
    profileURL: '#',
    // clientId: process.env.FB_GUNIT_ID,
    // clientSecret: process.env.FB_GUNIT_SECRET,
    clientId: process.env.FB_SPEAKEASY_ID,
    clientSecret: process.env.FB_SPEAKEASY_SECRET,
    scope: 'user:email'
  }
};
