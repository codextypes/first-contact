from django.db import models

class Alias(models.Model):
    alias = models.TextField()
    user_id = models.TextField()