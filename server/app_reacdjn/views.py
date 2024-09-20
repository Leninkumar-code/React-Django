from django.shortcuts import render,redirect
from .models import Book
from .serializer import BookSerializer
# Create your views here.

def view (request):
    books = Book.objects.all()
    return 
