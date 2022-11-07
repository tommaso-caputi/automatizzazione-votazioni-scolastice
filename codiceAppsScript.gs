function creazioneForm(classe, candidati) {
  var form = FormApp.create('Votazioni rappresentanti classe '+classe);
  const cand = candidati.split(",");
  cand.push("nessuno");
  form.setLimitOneResponsePerUser(true);
  form.setCollectEmail(true);
  form.setRequireLogin(true);
  var item = form.addMultipleChoiceItem();  
  item.setTitle('Scegliere la propria preferenza');
  item.setChoiceValues(cand).showOtherOption(true);
  item.showOtherOption(false);
  
  return form.getPublishedUrl();
}

function creazioneFormGenitori(classe, candidati) {
  var form = FormApp.create('Votazioni rappresentanti dei genitori classe '+classe);
  const cand = candidati.split(",");
  cand.push("nessuno");
  form.setCollectEmail(false);
  form.setRequireLogin(false);
  var item = form.addMultipleChoiceItem();  
  item.setTitle('Scegliere la propria preferenza');
  item.setChoiceValues(cand).showOtherOption(true);
  item.showOtherOption(false);
  
  return form.getPublishedUrl();
}