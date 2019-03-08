import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "21147b0885526cc0b5178721d695fbd4";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
