from django.shortcuts import render_to_response
from ..models.settings import Setting
from resources.facebook.graph import read_message


def assistant(request):
    return render_to_response('assistant/index.html', {'message': read_message()})
