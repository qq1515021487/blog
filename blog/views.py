
from django.shortcuts import render
from django.shortcuts import HttpResponse

# 博客主页
def index(request):
    return render(request, 'index.html')

# 博客列表
def mySay(request, list_id=-1):
    return render(request, 'mySay.html')


# 登录
def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')
