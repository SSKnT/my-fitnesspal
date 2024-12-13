from rest_framework.serializers import ModelSerializer
from .models import Workouts, Exercise

class WorkoutSerializer(ModelSerializer):
    class Meta:
        model = Workouts
        fields = '__all__'

class ExerciseSerializer(ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'
