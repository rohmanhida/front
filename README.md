simple web app built with nextjs, and tailwindcss
## structure
- backend = laravel
- frontend = nextjs
- db = sqlite

## how to run
- run
```
git clone git@github.com:rohmanhida/back.git
cd back
composer install
touch database/database.sqlite
php artisan migrate:refresh --seed
mv .env.example .env
php artisan key:generate
php artisan serve
cd ..
git clone git@github.com:rohmanhida/front.git
cd front
npm install
npm run dev
```

## run in docker
- run
```
git clone git@github.com:rohmanhida/front.git
docker-compose up -d --build
```

- akses di browser di halaman http://localhost:3000

## database design
https://excalidraw.com/#json=3I0VTLghjqw6pAMINNc_5,D4D8q71CIdCHwyszQPFTmA
