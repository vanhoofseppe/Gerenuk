# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-10-08 14:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assistant', '0002_auto_20171008_1632'),
    ]

    operations = [
        migrations.CreateModel(
            name='Facebook',
            fields=[
                ('id', models.DecimalField(decimal_places=25, max_digits=35, primary_key=True, serialize=False, verbose_name='Facebook ID')),
            ],
        ),
        migrations.CreateModel(
            name='FacebookInformation',
            fields=[
                ('information_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='assistant.Information')),
                ('facebook', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assistant.Facebook')),
            ],
            bases=('assistant.information',),
        ),
    ]
