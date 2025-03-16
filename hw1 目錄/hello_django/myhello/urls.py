from django.urls import path
from . import views


urlpatterns = [
    path('addcourse/', views.add_post, name='add_post'),
    path('courselist/', views.list_post, name='list_post'),
]