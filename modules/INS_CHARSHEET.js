export default class INS_CHARSHEET extends ActorSheet{
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
        classes: ["INS_MV", "sheet", "actor"],
        template: "systems/INS_MV/templates/PJ.html",
        width: 800,
        height: 700,
        resizable: false,
        tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "combate" }]
      });

  }
  getData() {
      const data = super.getData().data;
      data.dtypes = ["String", "Number", "Boolean"];
      if (this.actor.data.type == 'PJ') {
        //this._prepareCharacterItems(data);
        //this._calculaValores(data);
      }
      return data;
    }

}
