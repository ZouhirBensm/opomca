async function cont1(req, res, next) {
  try {
    // res.render('backlink1');
    res.render('backlink1', { ...res.locals.index_page_data });
  } catch (error) {
    console.error('Error in controller:', error);
    return next(error);
  }
}

const controller = {
  cont1: cont1
};

module.exports = controller;