from rest_framework import serializers
from app_reacdjn.models import *

class BookSerializer (serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'