import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [data, setData] = useState("");

  //Save a object in async storage
  const myObject = {
    name: "Mibits",
    salery: 45000,
    isDeveloper: true,
  };

  //SetItem
  const saveData = async () => {
    // await AsyncStorage.setItem("user", "Mithu");
    await AsyncStorage.setItem("user", JSON.stringify(myObject)); // setItem need string
    console.log("Savedata hit");
  };

  //GetItem
  const getData = async () => {
    const value = await AsyncStorage.getItem("user");
    setData(value!);
    console.log("Getdata hit");
  };

  //RemoveItem
  const removeData = async () => {
    await AsyncStorage.removeItem("user");
    console.log("Remove data hit");
  };

  // Remove all data
  const clearStorage = async () => {
    await AsyncStorage.clear();

    setData("");
    console.log("Clear hit");
  };

  //Get all keys
  const getKeys = async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
    console.log("getAllKeys hit");
  };

  //Save multiple data
  const saveMultiple = async () => {
    await AsyncStorage.multiSet([
      ["name", "Mibits"],
      ["role", "Developer"],
    ]);

    console.log("multiSet hit");
  };

  //Get multiple
  const getMultiple = async () => {
    const value = await AsyncStorage.multiGet(["name", "role"]);
    console.log(value);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 12,
      }}
    >
      <Button title="Save Data" onPress={saveData} />

      <Button title="Get Data" onPress={getData} />

      <Button title="Remove Data" onPress={removeData} />

      <Button title="Clear Storage" onPress={clearStorage} />

      <Button title="Get All Keys" onPress={getKeys} />

      <Button title="Multi Set" onPress={saveMultiple} />

      <Button title="Multi Get" onPress={getMultiple} />

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Output:
        </Text>

        <Text>{data}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
