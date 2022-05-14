import INS_CHARSHEET from "./modules/INS_CHARSHEET.js";

Hooks.once("init", function(){
  console.log("test | INICIALIZANDO HOJAS DE PERSONAJE DE Ysystem");
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("INS_MV", INS_CHARSHEET, {
    makeDefault: true,
    types: ['PJ']
  });

});
