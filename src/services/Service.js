import axios from "axios";

/*
* ServiceToXmeme is the service class that contains all the API calls being made.
*/

class ServiceToXmeme {
  async fetchMemes() {
    let result = {
      data: [],
    };
    await axios.get("https://xmeme-be.herokuapp.com/memes/").then((res) => {
      result.data = res.data;
    });
    return result;
  }

  async postMemes(finalValue) {
    await axios.post("https://xmeme-be.herokuapp.com/memes/", finalValue);
  }

  async updateMeme(id, memeDto) {
    await axios.patch("https://xmeme-be.herokuapp.com/memes/" + id, memeDto);
  }

  async fetchMemeById(id) {
    let result = {
      data: [],
    };
    await axios.get("https://xmeme-be.herokuapp.com/memes/" + id).then((res) => {
      result.data = res.data;
    });
    return result;
  }
}

export default new ServiceToXmeme();