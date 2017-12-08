# Auth0 + Go Web App Sample

## Running the App

To run the app, make sure you have **go** and **goget** installed.

Rename the `.env.example` file to `.env` and provide your Auth0 credentials.

```bash
# .env

AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_DOMAIN=YOUR_DOMAIN
AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET
<<<<<<< HEAD
AUTH0_CALLBACK_URL=http://192.168.1.2.:3000/callback
=======
AUTH0_CALLBACK_URL=http://localhost:3000/callback
>>>>>>> 749f8454046dee811daa962e806c2e2fe0a81b38
```

Once you've set your Auth0 credentials in the `.env` file, run `go get .` to install the Go dependencies.

<<<<<<< HEAD
Run `go run main.go server.go` to start the app and navigate to [http://192.168.1.2.:3000/](http://192.168.1.2.:3000/)
=======
Run `go run main.go server.go` to start the app and navigate to [http://localhost:3000/](http://localhost:3000/)
>>>>>>> 749f8454046dee811daa962e806c2e2fe0a81b38