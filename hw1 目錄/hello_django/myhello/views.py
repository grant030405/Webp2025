from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post

logger = logging.getLogger('django')

@api_view(['GET'])
def add_post(request):
    department = request.GET.get('department', '')
    coursetitle = request.GET.get('coursetitle', '')
    instructor = request.GET.get('instructor', '')

    new_post = Post()
    new_post.department = department
    new_post.coursetitle = coursetitle
    new_post.instructor = instructor
    new_post.save()
    logger.debug('*************** myhello_api : ' + department)

    if department:
        return Response({"data": department + " 插入成功"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "表示請求參數錯誤"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)
