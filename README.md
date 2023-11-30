# GOVAA Challenge

### Clone repo
```git clone https://github.com/aothepro/govaa_challenge.git```

### Dockerized build
Run `docker-compose up --build`

## Manual
### Running backend locally

1. `cd backend` and run `npm install`
2. Change the db credentials in `backend/src/data-source.ts` if you are running postgres locally
3. Run `npm run migration:run` to seed the database

For docker run, `docker-compose -f docker-compose.yml up`


### Running frontend
1. `cd frontend` and run `npm install`
2. then run `npm run start`

# Screenshots
Register Page:

![Screenshot 2023-11-30 at 4 01 43 PM](https://github.com/aothepro/govaa_challenge/assets/22194504/93a427d0-73cb-497b-a66e-89d4a149e987)



After login:

![Screenshot 2023-11-30 at 3 57 44 PM](https://github.com/aothepro/govaa_challenge/assets/22194504/34622bf7-7623-462f-a616-1b06b85d7ddd)
