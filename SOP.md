# Standard Operating Procedure (SOP): Cloning Project for New Logic

This document outlines the standard procedure for cloning the current project to deploy as a new instance (new brand, staging environment, or separate project) using Cloudflare D1 and R2.

## 1. Preparation
- Ensure you have the `wrangler` CLI installed (`npm install -g wrangler`).
- Login to Cloudflare:
  ```bash
  npx wrangler login
  ```

## 2. Clone and Clean
- Clone the repository to a new folder.
- Delete the `.git` folder if you want to start a fresh git history, or just create a new branch.
- Install dependencies:
  ```bash
  pnpm install
  ```

## 3. Create Cloudflare Resources
You need to create new independent resources for the new project to avoid data conflicts.

### Database (D1)
Create a new D1 database:
```bash
npx wrangler d1 create <new-database-name>
```
*Take note of the `database_id` output from this command.*

### Storage (R2)
Create a new R2 bucket:
```bash
npx wrangler r2 bucket create <new-bucket-name>
```

## 4. Configuration Update

### Update `wrangler.jsonc`
Open `wrangler.jsonc` and update the following fields:

- **`name`**: Change to the new project name.
  ```jsonc
  "name": "new-project-name",
  ```
- **`d1_databases`**: Update the binding with the new ID and Name.
  ```jsonc
  "d1_databases": [
    {
      "binding": "D1",
      "database_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // New ID from Step 3
      "database_name": "new-database-name", // New Name from Step 3
      "remote": true,
    },
  ],
  ```
- **`r2_buckets`**: Update the bucket name.
  ```jsonc
  "r2_buckets": [
    {
      "binding": "R2",
      "bucket_name": "new-bucket-name",
      "preview_bucket_name": "new-bucket-name", // Optional: separate preview bucket if needed
    },
  ],
  ```

### Update Environment Variables (`.env`)
- Copy `.env.example` to `.env` (if not already done).
- **IMPORTANT**: Generate a new `PAYLOAD_SECRET`. Do not reuse the old one.
  ```bash
  openssl rand -hex 32
  ```
- Update any other project-specific environment variables.

## 5. Database Migration
The new D1 database is empty. You must push the schema to it.

```bash
# Generate migration files (if you have changed schema, otherwise skip)
pnpm payload migrate:create

# Apply migrations to the remote D1 database
pnpm payload migrate
# OR if using wrangler directly
npx wrangler d1 execute <new-database-name> --remote --file=./migrations/xxxx_migration.sql
```

## 6. Deployment
Deploy the new project to Cloudflare Workers/Pages.

```bash
pnpm run deploy
```

---

## Deployment Checklist

- [ ] Repository cloned to new location
- [ ] Dependencies installed (`pnpm install`)
- [ ] User logged in to Wrangler (`npx wrangler login`)
- [ ] **D1 Database** created (`wrangler d1 create`)
- [ ] **R2 Bucket** created (`wrangler r2 bucket create`)
- [ ] `wrangler.jsonc` updated:
    - [ ] Project `name` updated
    - [ ] D1 `database_id` and `database_name` updated
    - [ ] R2 `bucket_name` updated
- [ ] `.env` file created/updated:
    - [ ] New `PAYLOAD_SECRET` generated
- [ ] **Database Migrations** applied to the remote D1 instance
- [ ] Project successfully deployed (`pnpm run deploy`)
- [ ] Site verified running in browser
