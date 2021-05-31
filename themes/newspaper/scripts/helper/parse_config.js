/**
 * source: https://github.com/xaoxuu/hexo-theme-stellar/blob/3c1f9c3e4276b88db207978556a905dbc4f57e03/scripts/helpers/parse_config.js
 * md_link(theme.sidebar.menu['home']) is '/'
 * md_text(theme.sidebar.menu['home']) is 'Home'
 */

'use strict';

hexo.extend.helper.register('md_text', function (args) {
  if (args == undefined) {
    return '';
  }
  let tmp = args.split('](');
  if (tmp.length > 1) {
    tmp = tmp[0];
    if (tmp.length > 1) {
      tmp = tmp.substring(1, tmp.length);
    }
  }
  if (tmp == 'config.title') {
    tmp = hexo.config.title;
  } else if (tmp == 'config.avatar') {
    tmp = hexo.config.avatar;
  }
  return tmp;
});

hexo.extend.helper.register('md_link', function (args) {
  if (args == undefined) {
    return '';
  }
  let tmp = args.split('](');
  if (tmp.length > 1) {
    tmp = tmp[1];
    if (tmp.length > 1) {
      tmp = tmp.substring(0, tmp.length - 1);
    }
  }
  return tmp;
});