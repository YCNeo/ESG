# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Act(models.Model):
    act_id = models.IntegerField(db_column='ACT_ID', primary_key=True)  # Field name made lowercase.
    act_name = models.CharField(db_column='ACT_NAME', max_length=45)  # Field name made lowercase.
    category = models.IntegerField(db_column='CATEGORY')  # Field name made lowercase.
    type = models.CharField(db_column='TYPE', max_length=5)  # Field name made lowercase.
    act_hour = models.IntegerField(db_column='ACT_HOUR')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ACT'


class ActFac(models.Model):
    es_no = models.IntegerField(db_column='ES_NO')  # Field name made lowercase.
    act_no = models.IntegerField(db_column='ACT_NO')  # Field name made lowercase.
    amount = models.IntegerField(db_column='AMOUNT')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ACT_FAC'


class Ef(models.Model):
    ef_no = models.IntegerField(db_column='EF_NO')  # Field name made lowercase.
    gas_no = models.IntegerField(db_column='GAS_NO')  # Field name made lowercase.
    amount = models.IntegerField(db_column='AMOUNT')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'EF'


class Es(models.Model):
    es_id = models.IntegerField(db_column='ES_ID', primary_key=True)  # Field name made lowercase.
    es_name = models.CharField(db_column='ES_NAME', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ES'


class Gwps(models.Model):
    gas_id = models.IntegerField(db_column='GAS_ID', primary_key=True)  # Field name made lowercase.
    gas_name = models.CharField(db_column='GAS_NAME', max_length=45)  # Field name made lowercase.
    gwps = models.IntegerField(db_column='GWPS')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'GWPS'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
