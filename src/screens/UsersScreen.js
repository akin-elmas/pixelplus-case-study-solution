import { parseRequestUrl } from "../utils";

const UsersScreen = {
  render: async (param) => {
    const request = parseRequestUrl();
    const response = await fetch(`https://reqres.in/api/users/${request.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || !response.ok) {
      return `<div>Error in getting data</div>`;
    }
    const rawUser = await response.json();
    const user = rawUser.data;

    return `
    <div class="UserDetail">
    <div class="Card__img">
              <img
                src="${user.avatar}"
                alt="${user.first_name + user.last_name}"
              />
            </div>
            <h3 class="Card__username">${user.first_name}</h3>
            <small class="Card__usermail">${user.email}</small>
            <div class="Card__actions">
              <a href="/">Back</a>
            </div>
    </div>
    `;
  },
};

export default UsersScreen;
