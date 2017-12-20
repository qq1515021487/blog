"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from blog import views
from django.conf.urls import handler404, handler500

urlpatterns = [
    # 主页路由
    url('^$', views.index),
    url(r'index/', views.index),

    # 博客列表
    url(r'mySay/(?P<list_id>\d+)', views.mySay),

    # 登录
    url('login/$', views.login),

    #注册
    url('register', views.register),

    path('admin/', admin.site.urls),
]

# 配置错误链接
handler404 = views.index
handler500 = views.index