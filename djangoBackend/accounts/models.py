from django.contrib.auth.models import AbstractUser
from django.db import models
import hashlib
from django.utils import timezone


class CustomUser(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    height = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    avatar = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.username

    def get_gravatar_url(self):
        email = self.email
        hashed_email = hashlib.md5(email.encode()).hexdigest()
        return f"https://www.gravatar.com/avatar/{hashed_email}?d=identicon"

    def save(self, *args, **kwargs):
        if not self.avatar:
            self.avatar = self.get_gravatar_url()
        super().save(*args, **kwargs)