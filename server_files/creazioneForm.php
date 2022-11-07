<html>
  <head>
    <link href="bootstrap.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
  </head>
  <body>
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="logo.png" alt="" width="72" height="57">
      <h1 class="display-5 fw-bold"></h1>
      <div class="col-lg-6 mx-auto">  
        <hr class="solid" style="border-top: 3px solid #bbb">
        
        <?php
            //cambiare variabili sottostanti
            $link_app_script = "";   //link del file di apps script(seguire documentazione)
            $username = "";          //username database altervista
            $dbname = "";            //nome database altervista (es.my_username)
            $passworddb="";          //password database altervista (se non impostata, lasciare vuota)
            //-----------------

            $token = $_POST['token'];
            $classe = $_POST['anno'][0];
            $classe .= $_POST['corso'];
            $classe .= $_POST['specializzazione'][0];
            $candidati = $_POST['candidati'];
            $password = $_POST['password'];
  
            if($password == ''){    //password per la creazione del form
              $curl = curl_init();
              curl_setopt_array($curl, array(
                  CURLOPT_URL => $link_app_script,
                  CURLOPT_RETURNTRANSFER => true,
                  CURLOPT_ENCODING => '',
                  CURLOPT_MAXREDIRS => 10,
                  CURLOPT_TIMEOUT => 0,
                  CURLOPT_FOLLOWLOCATION => true,
                  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                  CURLOPT_CUSTOMREQUEST => 'POST',
                  CURLOPT_POSTFIELDS =>'{"parameters":["'.$classe.'","'.$candidati.'"]}',
                  CURLOPT_HTTPHEADER => array(
                      'Authorization: Bearer '.$token.'',
                      'Content-Type: application/json'
                  ),
              ));

              $response = curl_exec($curl);
              curl_close($curl);
              $response = json_decode($response, true);
              $link = $response["response"]["result"];

              if ($link != ""){

              $servername = "localhost";
              $conn = mysqli_connect($servername, $username, $passworddb, $dbname);
              if (!$conn) {
              die("Connection failed: " . mysqli_connect_error());
              }
              $sql = "INSERT INTO studenti (classe, link) VALUES ('".$classe."', '".$link."')";

              if (mysqli_query($conn, $sql)) {
                  echo "<p class='fw-bolder'>Form creato e aggiunto al database con successo: ".$link."</p>";
              } else {
                  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
              } 
              }else{
              echo "<p class='fw-bolder'>Errore nella creazione del form.</p>";
              }
              echo '<hr class="solid" style="border-top: 3px solid #bbb"><button type="button" onclick="history.back();" class="btn btn-primary btn-lg px-4 gap-3">Torna alla creazione del form</button>';
        	}else{
           	  echo "<p class='fw-bolder'>Password non corretta</p>";
            }
        ?>

      </div>
    </div>
  </body>
<html>
