class AuthServices {
  saveApiKeyLocalStorage(data) {
    localStorage.setItem('apiKey', data);
  }

  getApiKeyLocalStorage() {
    const apiKey = localStorage.getItem('apiKey');
    return apiKey;
  }

  clearApiKeyLocalStorage() {
    localStorage.removeItem('apiKey');
  }
}

export default new AuthServices();
