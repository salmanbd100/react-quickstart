// api data using XML http request

export default function apiHelper() {
  var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://localhost:3000/data";

  xhr.open(method, url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
}


// api data using fetch api

