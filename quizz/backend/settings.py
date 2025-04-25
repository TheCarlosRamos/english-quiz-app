CORS_ALLOW_ALL_ORIGINS = True 


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]



INSTALLED_APPS = [
    ...
    'rest_framework',
    'corsheaders',
    'quiz',
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
