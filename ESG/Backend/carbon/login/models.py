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
