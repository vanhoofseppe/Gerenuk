from django.contrib import admin

# Register your models here.
from .models.greetings import Greeting
from .models.settings import Setting


@admin.register(Greeting)
class GreetingAdmin(admin.ModelAdmin):
    pass


@admin.register(Setting)
class SettingsAdmin(admin.ModelAdmin):
    fields = ('key', 'value',)
    list_display = ('key', 'value',)
    pass
