from rest_framework import viewsets
from .serializer import AutoSerializer
from .models import Auto


# Create your views here.

class AutoView(viewsets.ModelViewSet):
    serializer_class = AutoSerializer
    queryset = Auto.objects.all()