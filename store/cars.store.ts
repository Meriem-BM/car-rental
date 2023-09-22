import { defineStore } from "pinia";
import axios from "axios";

export const useCarsStore = defineStore({
  id: "cars",
  state: () => ({
    cars: [],
    popularCars: [],
    car: {},
  }),
  getters: {
    getCars(state) {
      return state.cars;
    },
    getPopularCars(state) {
      return state.popularCars;
    },
    getCar(state) {
      return state.car;
    },
  },
  actions: {
    fetchPopularCars() {
      // fetch cars
      axios
        .get("http://localhost:3456/popularCars", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          this.popularCars = res.data;
        })
        .catch((err) => {
          this.popularCars = [];
        });
    },
    fetchCars() {
      // fetch cars
      axios
        .get("http://localhost:3456/cars", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          this.cars = res.data.data;
        })
        .catch((err) => {
          this.cars = [];
        });
    },
    fetchCarById(id: string) {
      // fetch cars
      axios
        .get("http://localhost:3456/cars/" + id, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          this.car = res.data;
        })
        .catch((err) => {
          this.car = {};
        });
    },
  },
});
