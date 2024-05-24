# Generated by Django 5.0.6 on 2024-05-24 09:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0002_alter_component_table'),
        ('key_word', '0003_alter_keyword_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='component',
            name='keyword_id',
            field=models.ForeignKey(db_column='keyword_id', on_delete=django.db.models.deletion.CASCADE, to='key_word.keyword'),
        ),
    ]
