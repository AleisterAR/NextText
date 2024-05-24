# Generated by Django 5.0.6 on 2024-05-24 09:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer_site', '0002_alter_customersite_table'),
        ('user', '0002_alter_user_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customersite',
            name='user_id',
            field=models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, to='user.user'),
        ),
    ]