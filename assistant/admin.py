from django.contrib import admin

# Register your models here.
from .models.greetings import Greeting, GreetingAnswer, GreetingQuestion
from .models.settings import Setting
from .models.facebook import Facebook, FacebookInformation


@admin.register(Greeting)
class GreetingAdmin(admin.ModelAdmin):
    fields = ('when',)
    list_display = fields
    pass


@admin.register(GreetingAnswer)
class GreetingAnswerAdmin(admin.ModelAdmin):
    fields = ('info',)
    list_display = fields
    pass


@admin.register(GreetingQuestion)
class GreetingQuestionAdmin(admin.ModelAdmin):
    fields = ('info',)
    list_display = fields
    pass


@admin.register(Setting)
class SettingAdmin(admin.ModelAdmin):
    fields = ('key', 'value',)
    list_display = fields
    pass


@admin.register(Facebook)
class FacebookAdmin(admin.ModelAdmin):
    fields = ('id',)
    list_display = fields
    pass


@admin.register(FacebookInformation)
class FacebookInformationAdmin(admin.ModelAdmin):
    fields = ('info',)
    list_display = fields
    pass
