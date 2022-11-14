export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

export const addFunds = (userId, amount) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { amount }
  })
}
