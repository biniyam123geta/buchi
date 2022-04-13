import { handleResponse } from "./handle-response";

// Wrapper function that wraps HTTP GET method
export async function getAsync(url) {
  let requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  // requestOptions = await
  try {
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
  } catch (e) {
    console.log("e isss");
    console.log(e);
    return Promise.reject("Network Error");
  }
}

// Wrapper function that wraps HTTP POST method
export async function postAsync(url, body) {
  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  // requestOptions = await

  try {
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
  } catch (e) {
    return Promise.reject("Network Error");
  }
}

export async function deleteAsync(url) {
  let requestOptions = {
    method: "DELETE",
    header: { "Content-Type": "application/json" },
  };

  try {
    let response = await fetch(url, requestOptions);
    return handleResponse(response);
  } catch (e) {
    return Promise.reject("Network error");
  }
}
