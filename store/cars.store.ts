import { defineStore } from "pinia";
import axios from "axios";

export const useCarsStore = defineStore({
  id: "cars",
  state: () => ({
    cars: [],
    popularCars: [],
  }),
  getters: {
    getCars(state) {
      return state.cars;
    },
    getPopularCars(state) {
      return state.popularCars;
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
          console.log(res.data);

          this.popularCars = res.data;
        })
        .catch((err) => {
          this.popularCars = [];
          console.log(err);
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
            console.log(res.data);
    
            this.cars = res.data.data;
            })
            .catch((err) => {
            this.cars = [];
            console.log(err);
            });
        }
  },
});
