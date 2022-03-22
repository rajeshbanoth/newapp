module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
    API_PRODUCTION:'https://nextblogserver.herokuapp.com/api',
      //API_PRODUCTION:'http://localhost:8000/api',
      PRODUCTION:true,
      DISQUS_SHORTNAME:'globalmedia-3',
      GOOGLE_CLIENT_ID:'679957419018-v2akkuef35nocfo6karou98tr0cbphct.apps.googleusercontent.com',
      APP_NAME:"Next Blog",
      DOMAIN_PRODUCTION:'https://nextblogg.netlify.app',
      FB_APP_ID:''

    },
  }