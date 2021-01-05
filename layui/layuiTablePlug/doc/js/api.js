/**

 @Name：api 文档
 @Author：岁月小偷
 @License：MIT

 */


layui.define(['element', 'code', 'layer', 'form'], function (exports) {
  "use strict";

  var $ = layui.$,
    element = layui.element
  ;

  layui.link('css/global.css', 'api_global');
  layui.link('css/main.css', 'api_main');


  $('[lay-filter="api_header"]').load('views/menu.html', function () {
    element.render('nav', 'api_header');
  });

  $('#app_api').load('views/main.html', function () {
  });

  $('[lay-filter="api_menu_side"]').load('views/menuSide.html', function () {
  });


  $('[lay-filter="api_menu_side"]').on('click', 'a', function (event) {
    var elemA = $(this);
    layer.msg('开发中', {anim: 6});
  });

  exports('api', {});
});
