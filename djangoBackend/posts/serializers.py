from .models import Post
from rest_framework.serializers import ModelSerializer


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'img', 'desc', 'created']  

    def create(self, validated_data):
        # Assign the user to the post manually in the view
        validated_data['user'] = self.context['request'].user 
        return super().create(validated_data)