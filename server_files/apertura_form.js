async function aperturaRisultati(){
    //cambiare variabili sottostanti
    const link_altervista = "";   //link del file di apps script(seguire documentazione)
    //-----------------

    try{
      const response = await fetch(link_altervista+"/vincitori.json");
      const json1 = await response.json();
    }catch(error){
      alert('Le votazioni non sono ancora terminate');
    }
    const response = await fetch(link_altervista+"/vincitori.json");
    const json1 = await response.json();
    
    //document.open();
    var classe = "";
    classe+=(document.getElementById("anno").value[0]);
    classe+=(document.getElementById("corso").value);
    classe+=(document.getElementById("specializzazione").value[0]);
    
    if (Object.keys(json1).includes(classe)){
      vinc1 = json1[classe][0];
      vinc2 = json1[classe][1];
  
        paginaRisultati = '<html> <head> <link href="bootstrap.min.css" rel="stylesheet"> <script type="text/javascript" src="apertura form.js"></script> <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"> </head> <body> <div class="px-4 py-5 my-5 text-center"> <img class="d-block mx-auto mb-4" src="nuovologoscuola.png" alt="" width="72" height="57"> <h1 class="display-5 fw-bold">Vincitori classe '+classe+'</h1> <div class="col-lg-6 mx-auto"> <hr class="solid" style="border-top: 3px solid #bbb"> <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> <p class="text-monospace">'+vinc1+'</p> <p class="text-monospace">'+vinc2+'</p> </div> </div> </div> </body> </html>';
  
      document.write(paginaRisultati);
      document.close();
    }else{
      alert('Le votazioni non sono ancora terminate');
    }
    
  }
  
function vota(){
  var classe = "";
  classe+=(document.getElementById("anno").value[0]);
  classe+=(document.getElementById("corso").value);
  classe+=(document.getElementById("specializzazione").value[0]);
  
  classi_non_valide = [];
  
  if (classi_non_valide.includes(classe)){
    alert('Classe inserita non valida');
  }else{
    fetch("lettura_database.php", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",},
          body: `classe=${classe}`,
    })
    .then((response) => response.text())
    .then((res) => (control(res)));
  }
}

function votaGenitori(){
  var classe = "";
  classe+=(document.getElementById("anno").value[0]);
  classe+=(document.getElementById("corso").value);
  classe+=(document.getElementById("specializzazione").value[0]);
  
  classi_non_valide = [];
  
  if (classi_non_valide.includes(classe)){
    alert('Classe inserita non valida');
  }else{
    fetch("lettura_database_genitori.php", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",},
          body: `classe=${classe}`,
    })
    .then((response) => response.text())
    .then((res) => (control(res)));
  }
}

function control(url){
  if (url[0] != 'h'){
    alert("Il form per le votazioni non \u00E8 stato ancora generato");
  }else{
    window.open(url);
  }
}