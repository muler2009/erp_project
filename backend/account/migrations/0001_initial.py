# Generated by Django 5.0 on 2024-02-17 08:16

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupModel',
            fields=[
                ('custom_group_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('custom_group_abbreviation', models.CharField(max_length=50)),
                ('custom_group_name', models.CharField(max_length=255)),
                ('has_sub_group', models.BooleanField(default=False)),
                ('group_created_at', models.DateTimeField(auto_now_add=True)),
                ('group_modified_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'GroupModel',
                'ordering': ['custom_group_name'],
            },
        ),
        migrations.CreateModel(
            name='RoleModel',
            fields=[
                ('role_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('role_name', models.CharField(max_length=50, unique=True, verbose_name='Role')),
                ('role_created_at', models.DateTimeField(auto_now_add=True)),
                ('role_modified_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Role',
                'verbose_name_plural': 'Roles',
                'db_table': 'Role',
                'ordering': ['role_name'],
            },
        ),
        migrations.CreateModel(
            name='UserAccountModel',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('username', models.CharField(max_length=255, unique=True, verbose_name='Username')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('phone', models.IntegerField(default=0)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
                ('role', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='users', to='account.rolemodel', to_field='role_name')),
            ],
            options={
                'verbose_name': 'User Account',
                'db_table': 'User',
                'ordering': ['username'],
            },
        ),
        migrations.CreateModel(
            name='SubGroupModel',
            fields=[
                ('sub_group_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('sub_group_abbreviation', models.CharField(max_length=50)),
                ('sub_group_name', models.CharField(max_length=255)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subgroups', to='account.groupmodel')),
            ],
            options={
                'db_table': 'SubGroupModel',
                'ordering': ['sub_group_name'],
            },
        ),
    ]
