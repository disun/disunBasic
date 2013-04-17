
/*
 * GET home page.
 */

exports.news1 = function(req, res){
  res.render('page1', { title: 'page1!' });
};
exports.news2 = function(req, res){
  res.render('page2', { title: 'page2!' });
};
exports.news3 = function(req, res){
  res.render('page3', { title: 'page3!' });
};