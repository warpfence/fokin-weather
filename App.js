import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native"

import * as Location from "expo-location";
import Loading from "./Loading";
import Weather from "./Weather";
import axios from "axios";

const API_KEY = "40ca24122db0bb46d524310ea263c719";

export default class extends React.Component{
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
    } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);

      this.getWeather(latitude, longitude);

      this.setState({ isLoading: false });
    } catch(error) {
      Alert.alert("So Sad.", "위치를 찾을 수 없습니다.");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}