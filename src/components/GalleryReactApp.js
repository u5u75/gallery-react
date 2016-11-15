'use strict';

var React = require('react/addons');


// CSS
require('normalize.css');
require('../styles/main.scss');

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for(var i = 1; i < imageDatasArr.length; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);


var GalleryReactApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
         <section className="img-sec"></section>
         <nav className="controller-nav"></nav>
      </section>
    );
  }
});
React.render(<GalleryReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryReactApp;
