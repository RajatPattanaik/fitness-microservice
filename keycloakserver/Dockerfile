FROM quay.io/keycloak/keycloak:26.3.2

ENV KC_BOOTSTRAP_ADMIN_USERNAME=admin
ENV KC_BOOTSTRAP_ADMIN_PASSWORD=admin

# Keycloak must listen on 0.0.0.0, not localhost
EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start-dev", "--http-host", "0.0.0.0"]
