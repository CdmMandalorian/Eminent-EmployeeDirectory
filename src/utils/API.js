/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api/?results=100&nat=us")
  },
  fetchUser: function() {
    return axios
      .get("https://randomuser.me/api/?results=&nat=us")
  }
};
