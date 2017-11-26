import requests

from assistant.models.settings import Setting


def get_message():
    app_id = '511249452542493'
    app_secret = Setting.objects.get(key='fb_secret').value

    #Franky:
    user_id = '449622021871979'

    access_token = app_id + '|' + app_secret

    url = "https://graph.facebook.com/{0}/posts?access_token={1}".format(user_id, access_token)

    response = requests.get(url)
    print(response.json())

    if check_error(response):
        return check_error(response)

    for item in response.json()['data']:
        if 'message' in item:
            return item['message']

    return "geen bericht gevonden"


def get_location():
    app_id = '511249452542493'
    app_secret = Setting.objects.get(key='fb_secret').value

    #Franky:
    user_id = '449622021871979'

    access_token = app_id + '|' + app_secret

    url = "https://graph.facebook.com/{0}/locations?access_token={1}".format(user_id, access_token)

    response = requests.get(url)
    print(response.json())

    if check_error(response.json()):
        return check_error(response.json())

    for item in response.json()['data']:
        if 'message' in item:
            return item['message']

    return "geen bericht gevonden"


def check_error(data):
    if 'error' in data:
        return data['error']['message']
    else:
        return False
