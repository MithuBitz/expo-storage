import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

import * as SQLite from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

// Create a database and create a connection
const db = SQLite.openDatabaseSync("demo.db");

const IndexScreen = () => {
  const [output, setOutput] = useState("");

  // Create a table with help of sqlite
  const createTable = () => {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER   
        );
      `);

    setOutput("Table Created");
  };

  const insertData = () => {
    db.runSync("INSERT INTO users (name, age) VALUES (?, ?)", "Niranjan", 30);

    setOutput("Insert Data on table");
  };

  const getUser = () => {
    const users = db.getAllSync("SELECT * FROM users");

    setOutput(JSON.stringify(users, null, 2));
  };

  const getFirstUser = () => {
    const user = db.getFirstSync("SELECT * FROM users");

    setOutput(JSON.stringify(user, null, 2));
  };

  const updateUser = () => {
    db.runSync("UPDATE users SET age = ? WHERE id = ?", 25, 1);

    setOutput("User updated");
  };

  const deleteUser = () => {
    db.runSync("DELETE FROM users WHERE id = ?", 1);

    setOutput("User Deleted");
  };

  const dropTable = () => {
    db.execSync(`
      DROP TABLE IF EXISTS users;
    `);

    setOutput("Table Dropped");
  };

  const statement = db.prepareSync("INSERT INTO users (name) VALUES (?)");
  const reuseQuery = () => {
    statement.executeSync(["Niranjan"]);
    setOutput("Reuse query for add user");
  };

  //Run the createTable function on first render
  useEffect(() => {
    createTable();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          gap: 12,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          SQLite Demo
        </Text>

        <Button title="Create Table" onPress={createTable} />

        <Button title="Insert User" onPress={insertData} />

        <Button title="Get All Users" onPress={getUser} />

        <Button title="Get First User" onPress={getFirstUser} />

        <Button title="Update User" onPress={updateUser} />

        <Button title="Reuse Query" onPress={reuseQuery} />

        <Button title="Delete User" onPress={deleteUser} />

        <Button title="Drop Table" onPress={dropTable} />

        <View
          style={{
            marginTop: 20,
            padding: 16,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Output
          </Text>

          <Text
            selectable
            style={{
              fontSize: 14,
            }}
          >
            {output}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
