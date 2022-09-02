from django.db import models
from apps.item.models import Item


class Review(models.Model):
    class Meta(object):
        db_table = 'review'

    item= models.ForeignKey(
        Item, on_delete=models.CASCADE, db_index=True
    )

    name = models.CharField(
        'name', blank=False, null=False, max_length=120, db_index=True
    )

    body = models.CharField(
        'body', blank=False, null=False, max_length=500, db_index=True
    )

    like_count = models.IntegerField(
        'Like_Count', blank=False, null=False
    )

    created_at = models.DateTimeField(
        'Created DateTime', blank=True, auto_now_add=True
    )

    updated_at = models.DateTimeField(
        'Created DateTime', blank=True, auto_now_add=True
    )
