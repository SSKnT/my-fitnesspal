from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import Workouts, Exercise, UserWorkout
from .serializers import WorkoutSerializer, ExerciseSerializer

class AllWorkoutsView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = WorkoutSerializer
    queryset = Workouts.objects.all()

class WorkoutListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = WorkoutSerializer

    def get_queryset(self):
        user = self.request.user
        return Workouts.objects.filter(user__id=user.id)

class WorkoutRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = WorkoutSerializer
    queryset = Workouts.objects.all()

    

class EnrollUserInWorkoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        workout = get_object_or_404(Workouts, pk=pk)
        user = request.user

        if UserWorkout.objects.filter(user=user, workout=workout).exists():
            return Response({'message': 'You are already enrolled in this workout!'}, status=400)
        
        UserWorkout.objects.create(user=user, workout=workout)
        return Response({'message': 'You have successfully enrolled in this workout!'}, status=200)