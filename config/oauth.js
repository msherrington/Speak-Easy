module.exports = {
  github: {
    loginURL: 'https://github.com/login/oauth/authorize',
    accessTokenURL: 'https://github.com/login/oauth/access_token',
    profileURL: 'https://api.github.com/user',
    clientId: process.env.GITHUB_SPEAKEASY_ID,
    clientSecret: process.env.GITHUB_SPEAKEASY_SECRET,
    scope: 'user:email',
    getLoginURL() {
      return `${this.loginURL}?client_id=${this.clientId}&scope=${this.scope}`;
    }
  },
  facebook: {
    loginURL: 'https://www.facebook.com/v2.9/dialog/oauth',
    accessTokenURL: 'https://graph.facebook.com/v2.9/oauth/access_token',
    profileURL: '#',
    clientId: process.env.FB_SPEAKEASY_ID,
    clientSecret: process.env.FB_SPEAKEASY_SECRET,
    scope: 'user:email'
  }
};
