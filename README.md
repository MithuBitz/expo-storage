# Data Storage — SQLite Demo

A cross-platform Expo lab app for **local relational storage** with [expo-sqlite](https://docs.expo.dev/versions/v55.0.0/sdk/sqlite/).

The home screen (`src/app/index.tsx`) demonstrates creating a table, CRUD operations, prepared statements, and live output in an **Output** panel.

---

## Table of Contents

- [Data Storage — SQLite Demo](#data-storage--sqlite-demo)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
  - [SQLite Demo](#sqlite-demo)
    - [About](#about)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [How It Works](#how-it-works)
    - [Database Operations](#database-operations)
  - [SecureStore Reference](#securestore-reference)
    - [About](#about-1)
    - [Features](#features-1)
    - [Tech Stack](#tech-stack-1)
  - [Notes](#notes)

---

## Quick Start

```bash
npm install
npx expo start
```

Use the buttons on the home screen; results appear in the Output panel below.

---

## SQLite Demo

### About

**Data Storage** includes a hands-on SQLite workflow: open `demo.db`, create a `users` table, insert rows, query all or the first row, update and delete by id, reuse a prepared `INSERT`, and drop the table.

Built with [Expo Router](https://docs.expo.dev/router/introduction/) and [expo-sqlite](https://docs.expo.dev/versions/v55.0.0/sdk/sqlite/) sync APIs:

- `openDatabaseSync`
- `execSync`
- `runSync`
- `getAllSync`
- `getFirstSync`
- `prepareSync`

---

## Features

- **Schema** — `CREATE TABLE IF NOT EXISTS users` on mount and via button
- **Insert** — Parameterized `INSERT` with `name` and `age` fields
- **Read** — `getAllSync` and `getFirstSync` with JSON output
- **Update / Delete** — `UPDATE` and `DELETE` operations by `id`
- **Prepared Statements** — Reusable `INSERT INTO users (name) VALUES (?)`
- **Cleanup** — `DROP TABLE IF EXISTS users`
- **Live Feedback** — On-screen output for every database operation

---

## Tech Stack

| Layer      | Technology                                                                   |
| ---------- | ---------------------------------------------------------------------------- |
| Framework  | [Expo](https://expo.dev) ~55                                                 |
| Database   | [expo-sqlite](https://docs.expo.dev/versions/v55.0.0/sdk/sqlite/)            |
| Navigation | [Expo Router](https://docs.expo.dev/router/introduction/)                    |
| Language   | TypeScript                                                                   |
| Storage    | [expo-secure-store](https://docs.expo.dev/versions/v55.0.0/sdk/securestore/) |

**Note:** `expo-sqlite` and `expo-secure-store` are enabled in `app.json` plugins.

---

## How It Works

### Database Operations

| Operation       | API / Pattern                         | Notes                          |
| --------------- | ------------------------------------- | ------------------------------ |
| Open Database   | `openDatabaseSync("demo.db")`         | Module-level connection        |
| Create Table    | `execSync` + `CREATE TABLE`           | Creates `users(id, name, age)` |
| Insert          | `runSync` + `?` placeholders          | Example: Niranjan, 30          |
| Get All Rows    | `getAllSync("SELECT * FROM users")`   | Returns JSON array             |
| Get First Row   | `getFirstSync("SELECT * FROM users")` | Returns single row             |
| Update          | `runSync` UPDATE by `id`              | Example: age → 25              |
| Prepared Insert | `prepareSync` + `executeSync`         | Name-only insert reuse         |
| Delete / Drop   | `runSync` / `execSync`                | By `id` or `DROP TABLE`        |

---

## SecureStore Reference

> This section documents the earlier secure storage lab using `expo-secure-store`. Both storage approaches are part of this repo; the current UI focuses on SQLite.

### About

The app demonstrates storing, retrieving, and deleting secure key/value data such as tokens and serialized objects using Expo SecureStore APIs.

### Features

- Save secure token data
- Retrieve stored token/object
- Delete stored values
- JSON serialization support
- Basic secure local persistence demo

### Tech Stack

| Layer     | Technology        |
| --------- | ----------------- |
| Framework | Expo              |
| Storage   | expo-secure-store |
| Language  | TypeScript        |

---

## Notes

- The SQLite section appears first in the UI; SecureStore reference is kept for documentation.
- Both storage approaches are available and can be toggled via the app's navigation.
