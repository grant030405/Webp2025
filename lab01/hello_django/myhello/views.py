# # from django.shortcuts import render

# # Create your views here.
# from django.http import HttpResponse

# def myIndex(request):
#     my_name = request.GET.get('name') or request.POST.get('name', "CGU")  
#     return HttpResponse("Hello " + my_name)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name' , None)
        if my_name:
            retValue = {} 
            retValue['data'] = "Hello" + my_name
            return Response(retValue, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )