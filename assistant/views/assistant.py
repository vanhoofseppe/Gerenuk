from django.shortcuts import render_to_response
from resources.facebook.graph import *


def assistant(request):
    return render_to_response('assistant/index.html', {'message': get_location()})
