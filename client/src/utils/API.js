const axios = require('axios');

export default {
  //* Google books api
  searchBooks : function(book){
      return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book);
  }
}