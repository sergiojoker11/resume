---
title: 💼 Work History
---

| **DevOps Engineer**  | 01/2018 - 06/2024           |
| -------------------- | --------------------------- |
| Flexys Solutions Ltd | Bristol - England and Remote |

- A former member of a team of size 15. Initially, I worked as a Full Stack software engineer and showed interest to learn about infrastructure and shift to operations. About 3 years into the project, I was given a chance to pick up Ops work and eventually I transitioned to doing mostly this sort of work as clients signed up and the number of environments grew. 
- Over the years, we built a platform to collect debt from client's customers. 
- Platform started off as a monolith - 1 frontend app written in Angular (using TypeScript) and styling in Bootstrap and a backend service written in Scala using the message driven Akka toolkit (Cassandra for writes and Postgres for reads). 
- Progresively, we turned the platform into a event sourcing microservice architecture with Kafka at the epicenter as we added features to it. Most of the services were written in Scala using cats ecosystem, http4s, kafka client libraries to name some. Some third party services such us Kafka Connect, MirrorMaker Camunda and Keycloak. Search engine, persistance and message broker as SaaS - in respective order, OpenSearch, Postgres, Cassandra and Kafka.
- Software was distributed as docker containers, sometimes packaged in Helm Charts and orchestrated using Kubernetes. Helm was ditched for internally-developed services eventually.
- CI/CD using Concourse and GitHub actions.
- Infrastructure. Mostly Terraform.
- Cloud. Google Cloud Platform.
- Four people mainly focused on operations. Responsible for product CI/CD. As a highlight, once the number of environments reached 30, we persuaded CTO/HoD to allow us reconcile all the environments. At this point, we added Terragrunt to the stack.
- Collaborated to getting ISO27001 certificate by writting control implementations and effectiveness tests.

---

| **Software Engineer** | 02/2016 - 12/2017 |
| --------------------- | ----------------- |
| Costain Group Plc     | Yatton , England   |

- My first professional experience working as an Engineer.
- A 2 year project to build a product that helped Highways England manage roadside devices.
- Platform distributed in 2 flavours. A web app and a desktop app. The platform consisted of a frontend app written in AngularJS and Bootstrap and a Java backend using Spring.
