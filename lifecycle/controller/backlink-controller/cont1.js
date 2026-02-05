async function cont1(req, res, next) {

  if (res.locals.error) {
    console.log('test123')
    return next()
  }

  try {
    // Set meta data for the page
    res.locals.canonical = `https://www.opom.ca/backlink/${res.locals.n}`;
    res.locals.meta_description = "All the links for webpages that contain themselves links to one of the site I control for SEO crawler purposes";
    res.locals.html_title = `List of links for Google crawler ${res.locals.n}`;
    
    // Render the backlink1 template, passing urls from middleware
    // res.render('backlink1', {
    //   urls: res.locals.urls,
    //   canonical: res.locals.canonical,
    //   meta_description: res.locals.meta_description,
    //   html_title: res.locals.html_title
    // });

    // res.render('backlink1');
    

    res.locals.index_page_data.all_data_per_page_fr = {
      ...res.locals.index_page_data.all_data_per_page_fr,
      title: `List of links for Google crawler ${res.locals.n}`,
      description: 'All the links for webpages that contain themselves links to one of the site I control for SEO crawler purposes',
      page_url_identify: `/backlink/${res.locals.n}`,
      under_h1: 'Backlinks',
      meta_description: 'All the links for webpages that contain themselves links to one of the site I control for SEO crawler purposes',
    }

    console.log('\n\n567\n\n', res.locals.index_page_data)
    res.render('backlink1', {...res.locals.index_page_data});
  } catch (error) {
    console.error('Error in controller:', error);
    return next(error);
  }
}

const controller = {
  cont1: cont1
};

module.exports = controller;