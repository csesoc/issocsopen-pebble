var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var main = new UI.Window({
  fullscreen: true,
});

var subtitle = new UI.Text({
  position: new Vector2(0, 55),
  size: new Vector2(144, 30),
  font: 'gothic-18-bold',
  text: 'socs is',
  textAlign: 'center'
});
main.add(subtitle);
var textfield = new UI.Text({
  position: new Vector2(0, 70),
  size: new Vector2(144, 30),
  font: 'bitham-30-black',
  text: '...',
  textAlign: 'center'
});
main.add(textfield);
main.show();

var update = function() {
  textfield.text('...');
  ajax(
    {
      url: 'http://issocsopen.com/api',
      type: 'text'
    },
    function(data, status, request) {
      textfield.text(data);
    },
    function(error, status, request) {
      console.log('The ajax request failed: ' + error);
    }
  );
  return true;
};
update();
main.on('click', 'select', update);
