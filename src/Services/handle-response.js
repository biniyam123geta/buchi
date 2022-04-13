export async function handleResponse(response) {
    if (response == null) {
      return Promise.reject("Network Error");
    } else {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          return Promise.reject(data);
        }
        return data;
      });
    }
  }
  