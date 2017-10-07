import requests

from hello.models.settings import Setting


def read_message():
    app_id = '511249452542493'
    app_secret = Setting.objects.get(key='fb_secret').value

    #Franky:
    user_id = '449622021871979'

    access_token = app_id + '|' + app_secret

    url = "https://graph.facebook.com/{0}/posts?access_token={1}".format(user_id, access_token)

    response = requests.get(url)
    print(response.json())

    return response.json()['data'][0]['message']
