const express = require('express')
const app = express()

const fs = require('fs');

require('dotenv').config()

const PORT = process.env['PORT']



const affiliateLinks_app_router = require('./affiliatelinks-backend')


const createSiteMap = require('./miscallaneous/utils/custom-sitemap')
const { ENV, SIG } = require('./data/types/types_1')



app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use((req, res, next) => {
  return next()
});


app.get('/', (req, res, next) => {
  // Throw an error for testing the error handling middleware.
  // let error = new Error("new error")
  // return next(error)

  return res.render('index')
})


// To further template into /blog/:category/blog-posting/:blog-article-title
app.get('/blog/drywall/blog-posting/enhancing-your-space-with-professional-drywall-services', (req, res, next) => {
  return res.render('enhancing-your-space-with-professional-drywall-services')
})




app.get('/sitemap/xml-sitemap', (req, res) => {

  const now = new Date()
  console.log(now)

  // TODO update
  let last_modified_1 = '2024-06-09T16:43:42.378Z'
  let last_modified_1_date = new Date(last_modified_1);


  const urls = [
    {
      URL: '/',
      lastmod: last_modified_1_date,
      changefreq: "yearly",
      // hreflang: "en",
      priority: 1
    },
    {
      URL: '/blog/drywall/blog-posting/enhancing-your-space-with-professional-drywall-services',
      lastmod: last_modified_1_date,
      changefreq: "yearly",
      // hreflang: "en",
      priority: 1
    }
  ];




  const xml = createSiteMap(urls)

  fs.writeFileSync(`./public/sitemap/sitemap.xml`, xml, 'utf-8');

  return res.render('index')
});










app.use('/ral', affiliateLinks_app_router)






// Try accessing this URL localhost:3005/no_existant and that will trigger this middleware
app.use((req, res, next) => {
  if (req.method === "GET") {
    return res.status(200).render('url_not_present')
  }

  return next();
})



// Error thrown on server, return 200 and respond with json object describing server error
app.use((error, req, res, next) => {
  // console.error(err.stack)
  console.error('\n\n')

  console.error('\x1b[31;5m')
  console.error('Last middleware to process an error if any:')
  console.error('\x1b[0m')

  console.error('\x1b[37;41;1m')
  console.error(error)
  console.error('\x1b[0m')

  return res.status(200).json({
    name: error.constructor.name,
    real_status: 500,
    message: error.message
  })

})



const server = app.listen(PORT, () => {
  console.log('\n')
  console.log(`Congrats, your Node.JS Express.JS application is running on localhost:${PORT}.\napp.listen() callback function`)
  console.log('\n')
})


// When CTRL + C closes the app
server.on('close', () => {
  console.log('Express web server is closing\n');
});

const closeServer = () => {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const CLOSE_SIGNAL = (
  process.env.NODE_ENV === ENV.DEV ? SIG.INT
  : process.env.NODE_ENV === ENV.PROD ? SIG.TERM :
  SIG.INT
);

process.on(CLOSE_SIGNAL, async () => {
  console.log(`\n\nReceived ${CLOSE_SIGNAL} signal...\n`);
  try {
    await closeServer();
    console.log("Closed server.\n")
    process.exit(0);
  } catch (err) {
    console.error('Error while closing the server and disconnecting from sequelize:', err);
    process.exit(1);
  }
});