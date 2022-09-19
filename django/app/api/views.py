from django.shortcuts import render
from api.models import Item
from rest_framework import viewsets
from api.serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
  queryset = Item.objects.all()
  serializer_class = ItemSerializer
