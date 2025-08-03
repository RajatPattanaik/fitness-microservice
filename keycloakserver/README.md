# Keycloak on Render

This repo deploys [Keycloak 26.3.2](https://www.keycloak.org/) using Docker on [Render](https://render.com/).

## 🔧 Environment Variables

The default admin credentials are set in the Dockerfile and render.yaml:

- `KC_BOOTSTRAP_ADMIN_USERNAME=admin`
- `KC_BOOTSTRAP_ADMIN_PASSWORD=admin`

Change these in the `render.yaml` if deploying to production.

## 🚀 Deploying

1. Fork or clone this repo.
2. Push to your GitHub.
3. Create a new **Web Service** on [Render](https://dashboard.render.com).
4. Connect to your GitHub repo.
5. Render will build and run the Docker container automatically.

## 🌐 Access Keycloak

Once deployed, go to: `https://<your-service-name>.onrender.com`


Login using:

- **Username**: admin
- **Password**: admin

Admin console: `https://<your-service-name>.onrender.com/admin`



