## Description

A panel for organizing your projects

## Uses

 - [Laravel](https://laravel.com) for the back-end RESTful API
 - [React](https://reactjs.org/) for the front-end Web App

## Requirements

 1. [Node.js](http://nodejs.org)
 2. [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
 3. [Composer](https://getcomposer.org/)
 4. [Laravel requirements](https://laravel.com/docs/5.6#server-requirements)
	- PHP >= 7.1.3
	- OpenSSL PHP Extension
	- PDO PHP Extension
	- Mbstring PHP Extension
	- Tokenizer PHP Extension
	- XML PHP Extension
	- Ctype PHP Extension
	- JSON PHP Extension

## Installation

 1. Clone repository:
     `git clone https://github.com/cnasikas/admin-panel`

All the paths are relative to `admin-panel` folder

### RESTful API

 1. Go to `api` folder:

	```
	cd api
	```
 2. Install dependencies:

	 ```
	 composer install
	 ```
 3. Create the `.env` file:

	 ```
	 cp .env.example .env
	 ```
 4. Fill the `DB_DATABASE`, `DB_USERNAME` and `DB_PASSWORD` environment variables inside `.env` (more [here](https://laravel.com/docs/5.6/configuration#environment-configuration)).
 5. Generate an application key and fill the `APP_KEY` environment variable inside `.env` (more [here](https://laravel.com/docs/5.6/configuration#environment-configuration)):

	 ```
	 php artisan key:generate
	```  
 6. Run migrations:

	 ```
	 php artisan migrate
	 ```

#### Routes
To see the API routes:

```
php artisan route:list
```


| Method | URI |
|--|--|
| GET / HEAD | / |
| GET / HEAD | /notes |
| GET / HEAD | /notes/{note} |
| POST | /notes |
| DELETE | /notes/{note} |
| PUT / PATCH | /notes/{note} |
| GET / HEAD | /projects |
| GET / HEAD | /projects/{project} |
| POST | /projects |
| DELETE | /projects/{project} |
| PUT / PATCH | /projects/{project} |
| GET / HEAD  | projects/{project}/credentials |
| POST      | projects/{project}/credentials |
| PUT / PATCH | projects/{project}/credentials/{credential} |
| DELETE    | projects/{project}/credentials/{credential} |
| POST      | projects/{project}/payments |
| GET / HEAD  | projects/{project}/payments |
| DELETE    | projects/{project}/payments/{payment} |
| PUT / PATCH | projects/{project}/payments/{payment} |

#### Local Development Server

```
php artisan serve
 ```

#### More Information

[Laravel documentation](https://laravel.com/docs/5.6)

### Web App

 1. Go to `app` folder:
 2. Install dependencies with yarn:

	 ```
	 yarn install
	 ```
	or npm:

	```
	 npm install
	 ```
3. Deploy app:

	 ```
	 yarn build
	 ```

#### Local Development Server

```
yarn start
 ```

#### More Information

[React](https://reactjs.org/), [Create React App](https://github.com/facebook/create-react-app)

## To-do List

- [ ] User Authentication
- [ ] Refact ProjectDetails.js Web App Component
- [ ] Add new Note
- [ ] Partners
- [ ] Clients
- [ ] Settings
- [ ] Recycle bin
- [ ] Docker image
