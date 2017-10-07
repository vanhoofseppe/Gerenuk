from django.conf.urls import include, url

from django.contrib import admin

admin.autodiscover()

import assistant.views.assistant
import assistant.views.index
import assistant.views.db

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^tmp/$', assistant.views.index.index, name='index'),
    url(r'^$', assistant.views.assistant.assistant, name='assistant'),
    url(r'^db', assistant.views.db.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),
]
