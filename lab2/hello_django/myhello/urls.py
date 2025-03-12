# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.myIndex, name='index'),
# ]
from django.urls import path
from . import views

# urlpatterns = [
#     path('', views.HelloApiView.as_view(), name='index'),
# ]

urlpatterns = [
   path('add', views.add_post, name='add_post'),
   path('list', views.list_post, name='list_post'),
]