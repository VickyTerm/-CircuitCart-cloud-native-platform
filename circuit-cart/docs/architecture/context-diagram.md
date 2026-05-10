
---

#### **2. Container Diagram** (Most Important)

This is the **core diagram** for your project.

Create file: `docs/architecture/container-diagram.md`

```markdown
# Container Diagram

```mermaid
C4Container
    title Container Diagram for Circuit Cart

    Person(customer, "Customer", "Uses web or mobile")

    Container_Boundary(circuitcart, "Circuit Cart") {
        Container(frontend, "Frontend", "Next.js 15 (App Router)", "Web UI + SSR")
        Container(gateway, "API Gateway", "Traefik / Kong", "Routing, Auth, Rate Limiting")
        
        Container(user_svc, "User Service", "NestJS / Node.js", "Auth, Profile")
        Container(product_svc, "Product Service", "NestJS / Node.js", "Catalog, Search, Inventory")
        Container(order_svc, "Order Service", "NestJS / Node.js", "Cart, Orders")
        Container(payment_svc, "Payment Service", "NestJS / Node.js", "Payment processing")
        Container(notification_svc, "Notification Service", "Node.js", "Emails, Push")
    }

    ContainerDb(db, "PostgreSQL", "Main Database")
    ContainerDb(mongo, "MongoDB", "Product Catalog + Specs")
    Container(redis, "Redis", "Cache + Session")
    Container(rabbitmq, "RabbitMQ", "Event Bus")

    Rel(customer, frontend, "Uses", "HTTPS")
    Rel(frontend, gateway, "Calls APIs", "HTTPS")
    Rel(gateway, user_svc, "", "Internal")
    Rel(gateway, product_svc, "", "Internal")
    Rel(gateway, order_svc, "", "Internal")

    Rel(user_svc, db, "Reads/Writes", "SQL")
    Rel(product_svc, mongo, "Reads/Writes", "")
    Rel(order_svc, db, "Reads/Writes", "SQL")
    Rel(all_services, redis, "Cache", "")
    Rel(all_services, rabbitmq, "Publishes/Subscribes Events", "")

---

#### **2. Container Diagram** (Most Important)

This is the **core diagram** for your project.

Create file: `docs/architecture/container-diagram.md`

```markdown
# Container Diagram

```mermaid
C4Container
    title Container Diagram for Circuit Cart

    Person(customer, "Customer", "Uses web or mobile")

    Container_Boundary(circuitcart, "Circuit Cart") {
        Container(frontend, "Frontend", "Next.js 15 (App Router)", "Web UI + SSR")
        Container(gateway, "API Gateway", "Traefik / Kong", "Routing, Auth, Rate Limiting")
        
        Container(user_svc, "User Service", "NestJS / Node.js", "Auth, Profile")
        Container(product_svc, "Product Service", "NestJS / Node.js", "Catalog, Search, Inventory")
        Container(order_svc, "Order Service", "NestJS / Node.js", "Cart, Orders")
        Container(payment_svc, "Payment Service", "NestJS / Node.js", "Payment processing")
        Container(notification_svc, "Notification Service", "Node.js", "Emails, Push")
    }

    ContainerDb(db, "PostgreSQL", "Main Database")
    ContainerDb(mongo, "MongoDB", "Product Catalog + Specs")
    Container(redis, "Redis", "Cache + Session")
    Container(rabbitmq, "RabbitMQ", "Event Bus")

    Rel(customer, frontend, "Uses", "HTTPS")
    Rel(frontend, gateway, "Calls APIs", "HTTPS")
    Rel(gateway, user_svc, "", "Internal")
    Rel(gateway, product_svc, "", "Internal")
    Rel(gateway, order_svc, "", "Internal")

    Rel(user_svc, db, "Reads/Writes", "SQL")
    Rel(product_svc, mongo, "Reads/Writes", "")
    Rel(order_svc, db, "Reads/Writes", "SQL")
    Rel(all_services, redis, "Cache", "")
    Rel(all_services, rabbitmq, "Publishes/Subscribes Events", "")

---

#### **3. High-Level Technology Stack (Optional but Recommended)**

Add this section in your main README.md:

```markdown
## Technology Stack

**Frontend**: Next.js 15 (App Router) + TypeScript + TailwindCSS + shadcn/ui  
**Backend**: NestJS (Node.js) - Microservices  
**API Gateway**: Traefik  
**Databases**: PostgreSQL + MongoDB + Redis  
**Messaging**: RabbitMQ  
**Search**: Elasticsearch (future)  
**Container**: Docker + Docker Compose  
**Orchestration**: Kubernetes + Helm (Phase 2)  
**CI/CD**: GitHub Actions  
**IaC**: Terraform