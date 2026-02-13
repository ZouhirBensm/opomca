const path = require('path');
const fs = require('fs');

const createSiteMap = require('../../../miscellaneous/utils/custom-sitemap')

async function cont1(req, res, next) {
  // Set cache-control headers to prevent caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  res.setHeader('Pragma', 'no-cache');
  res.set('Pragma', 'no-cache');

  res.setHeader('Expires', '0');
  res.set('Expires', '0');

  res.set('Surrogate-Control', 'no-store');

  const PROJECT_ROOT = path.join(__dirname, '../../../');
  const xmlFilePath = path.join(PROJECT_ROOT, 'public', 'sitemap', 'sitemap.xml');
  const backlinksDir = path.join(__dirname, '../../../backlinks');

  if (fs.existsSync(xmlFilePath)) {
    fs.unlinkSync(xmlFilePath);
    console.log('Deleted existing sitemap.xml file');
  }

  const now = new Date();
  console.log(now);

  let last_modified_1 = '2024-08-14T00:34:21.928Z';
  let last_modified_1_date = new Date(last_modified_1);

  let last_modified_2 = '2025-03-02T14:48:01.424Z';
  let last_modified_2_date = new Date(last_modified_2);

  let last_modified_3 = '2025-09-20T13:05:37.389Z';
  let last_modified_3_date = new Date(last_modified_3);



  const urls = [
    {
      URL: '/',
      lastmod: last_modified_2_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/contact',
      lastmod: last_modified_2_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/organisation',
      lastmod: last_modified_2_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/a-propos',
      lastmod: last_modified_2_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/sitemap',
      lastmod: last_modified_2_date,
      changefreq: "monthly",
      priority: 1
    },
  ];






  const main_services_data_fr = await db.main_service_data_fr.findAll({
    attributes: ['slug', 'service_name', 'last_modified'],
    raw: true
  });



  if (!main_services_data_fr) {
    const error = new Error("No service pages found!")
    return next(error)
  }




  // console.log('\n\nservice_pages-> ', extra_service_pages_fr)

  main_services_data_fr.forEach(main_service_data_fr => {

    let url = `/seo/${main_service_data_fr.slug}`;

    // console.log(main_service_data_fr.last_modified)
    let lastmod = new Date(main_service_data_fr.last_modified)


    urls.push({
      URL: url,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1
    });


  });





  const extra_service_pages_fr = await db.extra_service_page_fr.findAll({
    attributes: ['slug', 'title', 'last_modified'],
    raw: true
  });



  if (!extra_service_pages_fr) {
    const error = new Error("No service pages found!")
    return next(error)
  }


  // console.log('\n\nservice_pages-> ', extra_service_pages_fr)

  extra_service_pages_fr.forEach(extra_service_page_fr => {

    let url = `/seo/${extra_service_page_fr.slug}`;

    // console.log(extra_service_page_fr.last_modified)
    let lastmod = new Date(extra_service_page_fr.last_modified)


    urls.push({
      URL: url,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1
    });


  });







  const blog_elements_fr = await db.blog_element_fr.findAll({
    attributes: ['slug', 'title', 'datetime_edited'],
    include: [
      {
        model: db.category_fr,
        as: 'category',
        attributes: ['category_name', 'slug']
      }
    ],
    raw: true,
    nest: true
  });


  if (!blog_elements_fr) {
    const error = new Error("No blog elements found!")
    return next(error)
  }


  // console.log('\n\nblog_elements-> ', blog_elements_fr)

  blog_elements_fr.forEach(blog_element_fr => {
    // console.log(blog_element_fr);

    let url = `/blog/${blog_element_fr.category.slug}/blog-posting/${blog_element_fr.slug}`;

    let datetime_edited = new Date(blog_element_fr.datetime_edited)


    urls.push({
      URL: url,
      lastmod: datetime_edited,
      changefreq: "monthly",
      priority: 0.8
    });


  });



  // return res.end()


  const backlink_pages_edited_date = '2026-02-13T18:27:54.977Z'
  const lastmod = new Date(backlink_pages_edited_date);

  const files = fs.readdirSync(backlinksDir);

  for (const file of files) {
    const match = file.match(/^backlink(\d+)\.txt$/i);
    if (!match) continue;

    const number = match[1];

    urls.push({
      URL: `/backlink/${number}`,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 0.8
    });
  }


  console.log("\n\n\n", urls, "\n\n\n")

  const xml = createSiteMap(urls);

  fs.writeFileSync(xmlFilePath, xml, 'utf-8');
  console.log('New sitemap.xml file generated');

  // return res.render('sitemap');
  // return res.sendFile('sitemap.html', { root: 'public' });
  // return res.redirect(301, '/sitemap');




  // return res.end()
  return res.redirect(301, '/sitemap');
}




module.exports = {
  cont1
}