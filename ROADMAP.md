---
# Feature Roadmap – MERN Recipe Project

This roadmap outlines the planned evolution of the MERN Recipe Project, from core functionality to advanced features and integrations. Each phase builds modularly, allowing for comfort-driven scaling, testing, and deployment.
---

## Phase 1: Core Functionality (MVP)

- [x] Create, read, update, delete (CRUD) recipes
- [x] Create and manage recipe boxes
- [x] Reference-based schema (`RecipeBox` → `Recipe`)
- [x] RESTful API with Express and Mongoose
- [x] Responsive React UI for browsing and managing recipes
- [x] Netlify + Render deployment with `.env` configuration
- [x] CORS setup and API integration

---

## Phase 2: UX & Comfort Enhancements

- [ ] Search and filter recipes by title or ingredient
- [ ] Tagging system for recipes (e.g., “vegan”, “quick”, “holiday”)
- [ ] Recipe box sorting (alphabetical, recently added)
- [ ] Modal-based recipe creation/editing for smoother UX
- [ ] Toast notifications for actions (create, delete, error)

---

## Phase 3: Authentication & User Management

- [ ] User registration and login (JWT-based)
- [ ] Private recipe boxes per user
- [ ] Shared boxes with view/edit permissions
- [ ] Role-based access control (admin, contributor, viewer)

---

## Phase 4: Media & Rich Content

- [ ] Image upload for recipes (Cloudinary or S3)
- [ ] Markdown support for recipe instructions
- [ ] Nutrition info fields (optional)
- [ ] Drag-and-drop reordering of ingredients or steps

---

## Phase 5: Testing & Automation

- [ ] Unit tests for controllers and models (Jest)
- [ ] Integration tests for API endpoints
- [ ] Cypress E2E tests for recipe flows
- [ ] GitHub Actions for CI/CD pipeline
- [ ] Seed script for mock data (local or Atlas)

---

## Phase 6: Analytics & Personalization

- [ ] Dashboard with recipe usage stats
- [ ] Favorite recipes tracking
- [ ] Recently viewed or cooked recipes
- [ ] Personalized suggestions based on tags or history

---

## Phase 7: Internationalization & Accessibility

- [ ] i18n support for bilingual UI (English/French)
- [ ] Accessible form labels and keyboard navigation
- [ ] Dark mode toggle
- [ ] Mobile-first layout refinements

---

## Phase 8: Optional Extensions

- [ ] Grocery list generator from selected recipes
- [ ] Weekly meal planner with drag-and-drop
- [ ] Export recipe box to PDF or shareable link
- [ ] AI-powered recipe suggestions (based on pantry or preferences)

---
