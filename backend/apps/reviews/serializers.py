
from .models import Review
from rest_framework import serializers

class ReviewSerializer(serializers.ModelSerializer):

    class Meta(object):
        model= Review
        fields='__all__'
    