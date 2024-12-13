from django.urls import path
from .views import ( AllPostsView, PostListCreateView, PostRetrieveUpdateDestroyView )


urlpatterns = [
    path('all/', AllPostsView.as_view(), name='all_posts'),
    path('', PostListCreateView.as_view(), name='my_posts'),
    path('<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='post_detail'),
]
