# Votazioni scolastiche

Sistema per votazioni rappresentanti per istituti scolastici tecnici industriali.
Creazione di form google automatizzata, con web server e database per l' accesso ai link dei google form.


## Creato con

* [<img width="150" src="https://i.ibb.co/FhJ3wXG/Altervista-Logo-4.png" />](https://it.altervista.org/)
* [<img width="60" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" />](https://getbootstrap.com/)
* [<img width="140" src="https://www.drupal.org/files/project-images/Google-API.jpg" />](https://cloud.google.com/apis?hl=it)

## Installazione

#### Setup altervista webserver e altervista database

1. Creare un account gratuitamente su https://it.altervista.org/
2. Importare dump database.sql per la creazione del database di altervista

#### Setup google apis e apps script

1. Accedere a https://console.cloud.google.com/ e creare un nuovo progetto
2. Abilitare api di google form e apps script
3. Generare una credenziale ID cliend OAuth 2.0 di tipo applicazione web e aggiungere URI di reindirizzamento (https://localhost)
4. Aggiungere alla schermata di consenso OAuth gli indirizzi email degli utenti che dovranno generare il token e quindi creare i forms di google
5. Accedere a https://www.google.com/script/start/ e creare un nuovo script( codiceAppsScript.gs )
6. Eseguire il deployment del file app script

#### Setup files

1. Scaricare il file client_secrets_X.json dalle credenziali OAuth 2.0 di google cloud, rinominarlo client_secrets.json e inserirlo nella cartella token 
2. Inserire in tutti i file .py e .php i valori richiesti nelle variabili 
3. Cambiare logo.png con il proprio logo (mantenere estensione .png)
4. Cambiare nei file .html l' anno nei tag h1
5. Eseguire l' upload dei file in server_files nella main directory di altervista
 
#### Requirements per crea_token.py
```python
pip install webbrowser requests google_auth_oauthlib
```

## Utilizzo

1. Generazione del token per apps script con lo script crea_token.py (lanciare il programma e dopo aver effettuato l' accesso con l'account che dovrà generare i form copiare l' url dalla barra di ricerca e incollarlo nella console di esecuzione del programma)
2. Creazione dei vari form con la pagina creazioneForm.hmtl e creazioneFormGenitori.html da raggiungere con altervista (es. https:://username.altervista.org/creazioneForm.html)
2. Creazione vincitori.json per la visualizzazione dei vincitori sul sito
3. Upload vincitori.json nella main directory di  altervista

## Screenshot
![Alt text](/screen/index_html.png?raw=true "index.html")
![Alt text](/screen/studenti_html.png?raw=true "studenti.html")
![Alt text](/screen/creazioneForm_html.png?raw=true "creazioneForm.html")

## Licenza
[MIT](https://choosealicense.com/licenses/mit/)
