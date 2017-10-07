from django.conf.urls import include, url

from django.contrib import admin

admin.autodiscover()

import hello.views.assistent
import hello.views.index
import hello.views.db

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^tmp/$', hello.views.index.index, name='index'),
    url(r'^$', hello.views.assistent.assistent, name='assistant'),
    url(r'^db', hello.views.db.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),
]
