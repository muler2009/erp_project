# Generated by Django 5.0 on 2024-02-13 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_alter_groupmodel_has_sub_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupmodel',
            name='has_sub_group',
            field=models.BooleanField(default=False),
        ),
    ]