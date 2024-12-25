from django.db import models
from accounts.models import CustomUser

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    sets = models.PositiveIntegerField(default=0) 
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Workouts(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    exercises = models.ManyToManyField(Exercise, related_name='workouts')
    user = models.ManyToManyField(CustomUser, through='UserWorkout', related_name='enrolled_workouts')
    image_url = models.URLField(blank=True, null=True)
    difficulty = models.CharField(max_length=100)
    status = models.CharField(max_length=100, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class UserWorkout(models.Model):
    user = models.ForeignKey(CustomUser, related_name='workouts', on_delete=models.CASCADE)
    workout = models.ForeignKey(Workouts, related_name='users', on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)
    progress = models.CharField(max_length=100, blank=True, null=True, default='Pending')
    
    def __str__(self):
        return f"{self.user.username} - {self.workout.name}"
