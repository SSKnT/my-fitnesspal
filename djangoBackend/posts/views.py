from .models import Post
from .serializers import PostSerializer, CustomPostSerializer
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

class AllPostsView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class PostListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CustomPostSerializer

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user)

    def perform_create(self, serializer):
        # Automatically assign authenticated user to the post
        serializer.save(user=self.request.user)

class PostRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def perform_update(self, serializer):
        if self.request.user != serializer.instance.user:
            raise PermissionDenied("You do not have permission to edit this post.")
        return super().perform_update(serializer)

    def perform_destroy(self, instance):
        if self.request.user != instance.user:
            raise PermissionDenied("You do not have permission to delete this post.")
        return super().perform_destroy(instance)
