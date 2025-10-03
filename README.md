# TILLY PROJECT PLAN

## GitHub Project Board – Tilly

### Columns (Kanban style)

1. **Backlog** – Ideas / future features
2. **To Do** – Planned next tasks
3. **In Progress** – Actively working on
4. **Review / Test** – Needs testing/debugging
5. **Done** – Completed tasks

---

### Initial Epics (high-level goals)

* **Setup & Infrastructure**
* **Core Models (DB + API)**
* **Frontend UI**
* **Commissions & Reporting**
* **Deployment & Documentation**

---

### Initial Tasks (Issues)

#### Epic: Setup & Infrastructure

* [ ] Create GitHub repo `Tilly` & initialize with README
* [ ] Add `.gitignore` (Node, Next.js, Docker)
* [ ] Setup **Next.js + React** frontend (Vercel ready)
* [ ] Setup **Node.js (Express/Nest)** backend
* [ ] Configure **PostgreSQL (Supabase)**
* [ ] Setup **Docker** for local development
* [ ] Basic CI (GitHub Actions – lint/test build)

#### Epic: Core Models (DB + API)

* [ ] Define `Employee` table & API endpoints
* [ ] Define `Service` table & CRUD API
* [ ] Define `Product` table & CRUD API
* [ ] Define `Sale` + `SaleItem` tables & endpoints
* [ ] Define `CommissionRule` + `Commission` tables & endpoints

#### Epic: Frontend UI

* [ ] Create app layout (sidebar/nav)
* [ ] Employee Management (list/add/edit)
* [ ] Service Management (list/add/edit)
* [ ] Product Management (list/add/edit)
* [ ] Sales screen: select employee + service/product + price + date
* [ ] Dashboard (sales & commissions overview)

#### Epic: Commissions & Reporting

* [ ] Apply commission rules per sale
* [ ] Store commission records per `SaleItem`
* [ ] Report: daily commission per employee
* [ ] Report: weekly commission per employee
* [ ] Export reports (CSV/PDF optional)

#### Epic: Deployment & Documentation

* [ ] Deploy frontend to **Vercel**
* [ ] Deploy backend to **Supabase / Docker container**
* [ ] Write basic documentation (README + setup guide)
* [ ] Add contribution guidelines (since it’s open source)

