from django.contrib import admin
from .models import Exercise, Workouts, UserWorkout

admin.site.register(Exercise)
admin.site.register(Workouts)
admin.site.register(UserWorkout)