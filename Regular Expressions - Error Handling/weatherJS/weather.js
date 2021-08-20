class Weather {
  constructor() {
    this.apiKey = "99dfe35fcb7de1ee";
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch();

    const responseData = await response.json(
      `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`
    );

    return responseData.current_observation;
  }

  // Change the weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
