FROM quay.io/keycloak/keycloak:26.3.2

ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KC_HTTP_ENABLED=true
ENV KC_HTTP_PORT=8080
ENV KC_HOSTNAME_STRICT=false
ENV KC_BOOTSTRAP_ADMIN_USERNAME=admin
ENV KC_BOOTSTRAP_ADMIN_PASSWORD=admin

# EXPLICIT: Ensure Keycloak binds to 0.0.0.0 and not localhost
CMD ["start-dev", "--http-host=0.0.0.0"]
