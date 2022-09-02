from django.shortcuts import render
from rest_framework import generics
from .serializers import ReviewSerializer
from django_filters.rest_framework import DjangoFilterBackend
# The DjangoFilterBackend class is used to filter the queryset based on a specified set of fields. This backend class automatically creates a FilterSet (django_filters. rest_framework. FilterSet) class for the given fields.
from .models import Review


class ReviewList(generics.ListAPIView):
    queryset=Review.objects.order_by('-created_at').all()
    serializer_class=ReviewSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields= ['item_id']

class ReviewAdd(generics.CreateAPIView):
    queryset= Review.objects.all()
    serializer_class=ReviewSerializer