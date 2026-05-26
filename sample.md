# Data Storage — SQLite Demo (current)

A cross-platform Expo lab app for **local relational storage** with [expo-sqlite](https://docs.expo.dev/versions/v55.0.0/sdk/sqlite/).

The home screen (`src/app/index.tsx`) demonstrates creating a table, CRUD operations, prepared statements, and live output in an **Output** panel.

---

## About (SQLite)

**Data Storage** includes a hands-on SQLite workflow: open `demo.db`, create a `users` table, insert rows, query all or the first row, update and delete by id, reuse a prepared `INSERT`, and drop the table.

Built with [Expo Router](https://docs.expo.dev/router/introduction/) and [expo-sqlite](https://docs.expo.dev/versions/v55.0.0/sdk/sqlite/) sync APIs (`openDatabaseSync`, `execSync`, `runSync`, `getAllSync`, `getFirstSync`, `prepareSync`).

## Features (SQLite)

- **Schema** — `CREATE TABLE IF NOT EXISTS users` on mount and via button
- **Insert** — parameterized `INSERT` (`name`, `age`)
- **Read** — `getAllSync` and `getFirstSync` with JSON output
- **Update / delete** — `UPDATE` and `DELETE` by `id`
- **Prepared statement** — reusable `INSERT INTO users (name) VALUES (?)`
- **Cleanup** — `DROP TABLE IF EXISTS users`
- **Live feedback** — on-screen output for every operation

## Tech stack (SQLite)

| Layer      | Choice |
| ---------- | ------ |
| Framework  | [Expo](https://expo.dev) ~55 |
| Database   | [expo-sqlite](https://docs.expo.dev/versions/v55.0.0/sdk/sqlite/) |
| Navigation | [Expo Router](https://docs.expo.dev/router/introduction/) |
| Language   | TypeScript |

`expo-sqlite` is enabled in `app.json` plugins alongside `expo-secure-store`.

## How it works (SQLite)

| Action        | API / pattern                         | Notes |
| ------------- | ------------------------------------- | ----- |
| Open DB       | `openDatabaseSync("demo.db")`         | Module-level connection |
| Create table  | `execSync` + `CREATE TABLE`           | `users(id, name, age)` |
| Insert        | `runSync` + `?` placeholders          | Sample: Niranjan, 30 |
| Get all       | `getAllSync("SELECT * FROM users")`   | Shown as JSON |
| Get first     | `getFirstSync("SELECT * FROM users")` | Single row |
| Update        | `runSync` UPDATE by `id`              | Example: age → 25 |
| Reuse insert  | `prepareSync` + `executeSync`         | Name-only insert |
| Delete / drop | `runSync` / `execSync`                | By `id` or `DROP TABLE` |

### Run the SQLite demo

```bash
npm install
npx expo start
```
Use the buttons on the home screen; results appear under Output.

SecureStore demo (reference)

The sections below document the expo-secure-store token/object demo. Both storage approaches are part of this repo; the current UI focuses on SQLite.

About (SecureStore)

This section documents the earlier secure storage lab using expo-secure-store.

The app demonstrates storing, retrieving, and deleting secure key/value data such as tokens and serialized objects using Expo SecureStore APIs.

Features (SecureStore)
Save secure token data
Retrieve stored token/object
Delete stored values
JSON serialization support
Basic secure local persistence demo
Tech stack (SecureStore)
Layer	Choice
Framework	Expo
Storage	expo-secure-store
Language	TypeScript
Notes
New SQLite section appears first; SecureStore reference kept below.
Broken markdown fences and leftover assistant text from the old README have been cleaned up.
You can further customize this README with screenshots, author info, or course/lab details.