function init(gui){

  var mb = new gui.Menu({type:"menubar"});
  mb.createMacBuiltin("your-app-name");
  gui.Window.get().menu = mb;
  gui.Window.get().showDevTools();
}




module.exports = {init:init};
