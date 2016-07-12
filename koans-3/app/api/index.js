const BASE_URL = 'http://notimplemented.yet';

export const getTodos = (userId) => (
  fetch(`${BASE_URL}user/todos`, {
    method: 'GET',
    body: JSON.stringify({
      userId,
    }),
    mode: 'cors',
  })
  .then(response => {
    return response.json();
  })
);