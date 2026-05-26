

# Data Storage

A cross-platform Expo demo for persisting sensitive data with **expo-secure-store**.



---

## About

**Data Storage** is a hands-on mobile lab app that shows how to store and retrieve data on device using Expo’s secure storage APIs. The home screen walks through common patterns: saving a string token, reading and deleting it, checking whether secure storage is available, and persisting JSON-serialized objects.

Built with [Expo Router](https://docs.expo.dev/router/introduction/) file-based routing and [expo-secure-store](https://docs.expo.dev/versions/v55.0.0/sdk/securestore/) for encrypted key–value storage on supported platforms.

## Preview





> Run the app and use the buttons on the home screen; results appear in the **Output** panel.

## Features

- **Token lifecycle** — save, read, and delete a sample token (`token`)
- **Availability check** — `SecureStore.isAvailableAsync()` before relying on the API
- **Structured data** — store and parse a JSON user object (`user`)
- **Live feedback** — on-screen output for every operation
- **Universal app** — iOS, Android, and web via Expo

## Tech stack


| Layer          | Choice                                                                       |
| -------------- | ---------------------------------------------------------------------------- |
| Framework      | [Expo](https://expo.dev) ~55                                                 |
| Navigation     | [Expo Router](https://docs.expo.dev/router/introduction/)                    |
| UI             | React Native                                                                 |
| Secure storage | [expo-secure-store](https://docs.expo.dev/versions/v55.0.0/sdk/securestore/) |
| Language       | TypeScript                                                                   |


`@react-native-async-storage/async-storage` is listed in dependencies for general async persistence; the current UI demo uses **SecureStore** only.

## How it works

The main screen (`src/app/index.tsx`) demonstrates:


| Action             | API                               | Stored key |
| ------------------ | --------------------------------- | ---------- |
| Save Token         | `setItemAsync`                    | `token`    |
| Get Token          | `getItemAsync`                    | `token`    |
| Delete Token       | `deleteItemAsync`                 | `token`    |
| Check Availability | `isAvailableAsync`                | —          |
| Save Object        | `setItemAsync` + `JSON.stringify` | `user`     |
| Get Object         | `getItemAsync` + `JSON.parse`     | `user`     |


### Platform notes

- **Secure storage** uses the platform keychain/keystore where available.
- On **web** or some **simulators**, `isAvailableAsync()` may return `false` — use the “Check Availability” button to verify before testing read/write.
- Do not store large blobs in SecureStore; prefer small secrets (tokens, session IDs, compact JSON).

## Project structure

data-storage/ ├── assets/ # App icons, splash, favicon ├── src/ │ └── app/ │ ├── layout.tsx # Root stack (Expo Router) │ └── index.tsx # SecureStore demo screen ├── app.json # Expo config (incl. expo-secure-store plugin) ├── package.json └── README.md

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/go) and/or Android Studio / Xcode for emulators
- Optional: [Bun](https://bun.sh) if you use the existing `bun.lock`

### Install

```bash
npm install
Run
npx expo start
Then open:

Android — a in the terminal or an emulator
iOS — i in the simulator (macOS)
Web — w in the browser
Expo Go — scan the QR code on a physical device
Shortcut scripts:

npm run android   # expo start --android
npm run ios       # expo start --ios
npm run web       # expo start --web
Lint
npm run lint
Development
Edit the demo UI in src/app/index.tsx.
Routing and layout live under src/app/ (Expo Router).
Expo SDK 55 docs: https://docs.expo.dev/versions/v55.0.0/
To reset to a blank Expo app template (moves starter code aside):

npm run reset-project
Learn more
Expo SecureStore
AsyncStorage (non-sensitive, larger data)
Expo Router
Expo documentation
License
Private project — add a license file if you plan to open-source or share.


## Small tweaks you might want
1. **Title alignment** — If this is a course/lab repo, add a subtitle under the hero: e.g. *“MobDev — local & secure storage”*.
2. **Screenshot** — Capture the “SecureStore Demo” screen with Output filled; put it in `docs/screenshot.png` and uncomment the Preview block.
3. **Async Storage section** — If you plan to add an AsyncStorage screen later, add a second **Features** bullet and a “Coming soon” note so the README matches the dependency in `package.json`.
4. **Author / course** — Add `## Author` with your name and repo link if this is for submission.
I’m in **Ask mode**, so I only provided the design and content. If you want this written into `README.md` automatically, switch to **Agent mode** and ask to apply it.

```

