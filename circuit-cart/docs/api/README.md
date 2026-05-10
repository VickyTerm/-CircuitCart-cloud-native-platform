# CircuitCart API Documentation

## Overview
CircuitCart follows a **microservices architecture**. Each backend service owns its own OpenAPI specification (`openapi.yaml`) located inside its folder under `apps/backend/`.

## Service Specs
- `apps/backend/api-gateway/openapi.yaml` → Gateway entry point
- `apps/backend/product-service/openapi.yaml` → Product catalog & IoT specs
- `apps/backend/user-service/openapi.yaml` → Authentication & user profiles
- `apps/backend/order-service/openapi.yaml` → Order creation & tracking
- `apps/backend/payment-service/openapi.yaml` → Payment initiation & refunds
- `apps/backend/notification-service/openapi.yaml` → Email, SMS, push notifications

## Umbrella Spec
- `apps/openapi.yaml` can be used as an **aggregated spec** that references all service specs.  
- Useful for API consumers who want a single entry point in Swagger Editor.

## Documentation
- High-level architecture diagrams are in `docs/architecture/`.  
- This folder explains system design, context diagrams, and service interactions.

## Validation
To validate a service spec:
1. Open [Swagger Editor](https://editor.swagger.io/).
2. Paste the contents of the service’s `openapi.yaml`.
3. Ensure no errors are reported.
