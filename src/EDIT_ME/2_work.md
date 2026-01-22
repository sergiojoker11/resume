---
title: 💼 Work History
---

| **Co-Founder**                 | 12/2024 - Present |
| ------------------------------ | ----------------- |
| [notifycal.com](notifycal.com) | Madrid, Spain     |

SaaS platform for appointment-based businesses to reduce no-shows through automated reminders.

- Designed and operated **serverless cloud infrastructure** on **AWS** using **OpenTofu** for IaC and **GitHub Actions** for CI/CD pipelines. Multi-environment setup with the ability to **spin up and tear down environments on demand**.
- Built integrations with **Google Calendar**, **Google Contacts**, multi-channel messaging (**SMS**, **email**, **WhatsApp**, **RCS**) and **Stripe** payment gateway.
- Developed **landing page** with **Astro** and a **customer portal** with **React**, optimized for B2B acquisition and aligned with brand identity.
- Managed full product lifecycle with co-founder: product strategy, pricing model - subscriptions + top-ups -, marketing, RRSS, support and finance operations.
- Built distributed, **event-driven architecture** using **AWS Lambda**, **SQS**, **SNS**, **DynamoDB** and **EventBridge** to handle high notification volumes. Monitoring and alerting using **CloudWatch** and tracing using **AWS X-Ray**.
- Implemented automated invoicing system compliant with Spanish and European regulations.
- Designed **onboarding flow** with **Google OAuth** authentication and interactive demo for product validation.
- Leveraged **AI-assisted development tools** (**Claude Code**, **ChatGPT**) following best practices, significantly boosting productivity and accelerating feature delivery.

Stack: **AWS Lambda**, **DynamoDB**, **SNS**, **SQS**, **EventBridge**, **CloudWatch**, **AWS X-Ray**, **S3**, **Terraform/OpenTofu**, **Terragrunt**, **GitHub Actions**, **TypeScript**, **React**, **TanStack Router/Query**, **Mantine**, **Tailwind CSS**, , **Stripe**, **Mailgun**, **OpenAPI**, **Zod**.

---

| **DevOps Engineer**  | 01/2018 - 06/2024 (**6,5 years**) |
| -------------------- | --------------------------------- |
| Flexys Solutions Ltd | Bristol, England and Remote       |

Debt collection company. A former member of a DevOps team of size 15.

- Initially, I worked as a **full stack** software engineer picking up frontend and backend work. Because I rapidly demonstrated interest in **operations** and, 3 years into the project I was given a chance to pick up infrastructure and operations work as clients signed up and the number of environments grew. Sometime after, I was able to develop features and services end to end.
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
| --------------------- | -------------------------------------- |
| Costain Group Plc     | Yatton, England                        |

Two-year governmental project to build a product to remotely manage roadside devices.

- First professional experience working as a **Software Engineer**.
- Product consisted of a frontend app written in **AngularJS** + **Bootstrap** and a **Java** backend using **Spring**. Backend connected to roadside devices - unix virtual machines - over SSH.
- Distributed in two flavours. A web app deployed in-house - due to project governmental nature i.e. **Highways England**. And a desktop app with limited functionalty oriented to client's operators.
