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
  - [AsyncStorage Reference](#asyncstorage-reference)
    - [About](#about-2)
    - [Features](#features-2)
    - [Tech Stack](#tech-stack-2)
    - [Database Operations](#database-operations-1)
  - [Notes](#notes)
- [Prerequisites](#prerequisites)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

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

## AsyncStorage Reference

> This section documents async key/value storage using `@react-native-async-storage/async-storage`. It provides simple, persistent storage for non-sensitive app data like user preferences and UI state.

### About

The app demonstrates storing, retrieving, updating, and deleting async key/value data using AsyncStorage APIs. This is ideal for app settings, user preferences, and non-sensitive cached data.

### Features

- Save key/value data asynchronously
- Retrieve stored values by key
- Update existing values
- Delete individual keys or clear all storage
- JSON serialization support
- Persistent storage across app sessions
- Non-encrypted, suitable for public data

### Tech Stack

| Layer     | Technology                                |
| --------- | ----------------------------------------- |
| Framework | Expo                                      |
| Storage   | @react-native-async-storage/async-storage |
| Language  | TypeScript                                |

### Database Operations

| Operation        | API / Pattern                            | Notes                            |
| ---------------- | ---------------------------------------- | -------------------------------- |
| Set Item         | `AsyncStorage.setItem(key, value)`       | Stores string or serialized JSON |
| Get Item         | `AsyncStorage.getItem(key)`              | Retrieves value by key           |
| Get All Items    | `AsyncStorage.getAllKeys()` + `multiGet` | Returns all stored data          |
| Update           | `AsyncStorage.setItem(key, newValue)`    | Overwrites existing value        |
| Remove Item      | `AsyncStorage.removeItem(key)`           | Deletes single key               |
| Clear All        | `AsyncStorage.clear()`                   | Removes all stored data          |
| Multi Operations | `AsyncStorage.multiSet/multiGet`         | Batch operations for efficiency  |

---

## Notes

- The SQLite section appears first in the UI; SecureStore reference is kept for documentation.
- Both storage approaches are available and can be toggled via the app's navigation.

---

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (bundled with Node.js) or Bun if you prefer Bun workflows
- Expo Go app on Android/iOS device (optional, for device testing)

---

## Available Scripts

Run these commands from the project root:

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

- `npm run start` - Starts the Expo development server
- `npm run android` - Opens the app on Android
- `npm run ios` - Opens the app on iOS (macOS + Xcode required)
- `npm run web` - Runs the app in a web browser
- `npm run lint` - Runs Expo lint checks

---

## Project Structure

```text
data-storage/
  src/
    app/
      index.tsx        # Main SQLite demo UI and actions
  scripts/
    reset-project.js   # Utility script to reset starter files
  package.json         # Scripts and dependency definitions
```

---

## Troubleshooting

- If Metro cache causes stale output, restart with:

  ```bash
  npx expo start --clear
  ```

- If SQLite actions fail unexpectedly, verify table creation has been run (`Create Table` button) before insert/update/delete actions.
- If emulator/device does not connect, ensure both machine and device are on the same network and try reloading from Expo Dev Tools.
