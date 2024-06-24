---
title: 💼 Work History
---

| **DevOps Engineer**  | 01/2018 - 06/2024 (**6,5 years**) |
| -------------------- | --------------------------- |
| Flexys Solutions Ltd | Bristol, England and Remote |

Debt collection company. A former member of a DevOps team of size 15.

- Initially, I worked as a **full stack** software engineer picking up frontend and backend work. Because I rapidly demonstrated interest in **operations**, 3 years into the project, I was given a chance to pick up operations work and eventually I transitioned to it as clients signed up and the number of environments grew.
- Platform started off as a monolith - a frontend app written in **Angular (using TypeScript)** and styling in Bootstrap and a backend service written in **Scala** using the message driven Akka toolkit (Cassandra for writes and Postgres for reads). 
- Progresively, the platform was turned into a **event sourcing** microservice architecture with **Kafka** at the epicenter as we added features to it. Most of the services were written in Scala using **Cats** ecosystem, http4s, kafka client libraries to name some. Some third party services such us Kafka Connect, MirrorMaker Camunda and Keycloak. Search engine, persistance and message broker as SaaS - in respective order, **OpenSearch**, **Postgres**, **Cassandra** and **Kafka**.
- Software was distributed as **docker** containers, sometimes packaged in Helm charts and orchestrated using **Kubernetes**. Helm was given up on for internally-developed services in the end in favour of terraform IaC using k8s official terraform provider.
- CI/CD using **Concourse** and **GitHub actions**.
- Infrastructure as Code. **Terraform** and **Terragrunt**.
- Cloud provider: **Google Cloud Platform**.
- Four people mainly focused on infrastructure and operations and also **responsible for product CI/CD**. As a remarkable milestone, once the number of environments reached 30, we made an effort to reconcile all the environments and added the concept of single platform version. At this point, we added Terragrunt to the stack.
- Collaborated to getting **ISO27001** certificate by writting control implementations and effectiveness tests and supporting CISO and auditors.

---

| **Software Engineer** | 02/2016 - 12/2017 (**almost 2 years**) |
| --------------------- | ----------------- |
| Costain Group Plc     | Yatton, England   |

Two-year governmental project to build a product to remotely manage roadside devices.
- First professional experience working as a **Software Engineer**.
- Product consisted of a frontend app written in AngularJS + Bootstrap and a **Java** backend using **Spring**. Backend connected to roadside devices - unix virtual machines - over SSH.
 - Distributed in two flavours. A web app deployed in-house - due to client's imposition. And a desktop app with limited functionalty oriented to client's operators.
