#creazione token per google api
import webbrowser
import google_auth_oauthlib
import requests

#sostituire le variabili sottostanti
client_id=""             # cliend_id credenziali OAuth di google cloud
client_secret=""         # client_secret credenziali OAuth di google cloud
#------------------

flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
            'client_secrets.json',
            scopes=['https://www.googleapis.com/auth/forms'])
flow.redirect_uri = 'https://localhost'
authorization_url, _ = flow.authorization_url(include_granted_scopes='true')
webbrowser.open(authorization_url)

link = input('inserire il link: ')

code = ""
for i in range(len(link)):
    if link[i] == '=' and link[i-4:i+1] == 'code=':
        for j in range(i+1, len(link)):
            if link[j] == '&' and link[j:j+6] == '&scope':
                break
            else:
                code+=link[j]

url = "https://oauth2.googleapis.com/token?client_id="+client_id+"&client_secret="+client_secret+"&code="+code+"&grant_type=authorization_code&redirect_uri=https://localhost"
payload={}
response = requests.request("POST", url, data=payload)
response = response.json()
token = response['access_token']
print(token)
