from .views import ( AllWorkoutsView, WorkoutListCreateView, WorkoutRetrieveUpdateDestroyView, EnrollUserInWorkoutView )   
from django.urls import path

urlpatterns = [
    path('all/', AllWorkoutsView.as_view(), name='all_workouts'),
    path('', WorkoutListCreateView.as_view(), name='my_workouts'),
    path('<int:pk>/', WorkoutRetrieveUpdateDestroyView.as_view(), name='workout_detail'),
    path('enroll/<int:pk>/', EnrollUserInWorkoutView.as_view(), name='enroll_user'),
]