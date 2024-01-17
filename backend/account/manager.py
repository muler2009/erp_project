from django.contrib.auth.base_user import BaseUserManager


class UserAccountManager(BaseUserManager):
    def create(self, email, username, password, **extra_fields):
        if not email:
            raise ValueError("Email Must be Provided first")
        
        email = self.normalize_email(email)
        email = email.lower()
        user = self.model(email=email, username=username, **extra_fields)
        
        # setting the user password 
        user.set_password(password)
        user.save(using=self._db)        
        return user 
    
    
    
    def create_superuser(self, email, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Super User must be Assigned to is_staff = True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Super User must be Assigned to is_staff = True')

        return self.create(email, username, password, **extra_fields)
