from django.urls import path, include
from rest_framework import routers
from autos import views


router = routers.DefaultRouter()
router.register(r'autos',views.AutoView, 'autos')


urlpatterns = [
    path("api/v1/", include(router.urls)),
]