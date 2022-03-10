const HomeScreen = {  
  render: async (id) => {
    const response = await fetch(`https://reqres.in/api/users?page=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || !response.ok) {
      return `<div>Error in getting data</div>`;
    }
    const allUsers = await response.json();
    const users = allUsers.data;

   
    return `
   
    <section class="Members">
        <div class="Members__bar">
          <h1 class="Members__title">All Members</h1>
          <div class="Members__actions">
          <a href="/#/create">Create New Member</a>
          </div>
        </div>

        <div class="Wrapper">
        ${users
          .map(
            (user)=>`
            <div class="Card">
            <div class="Card__img">
              <img
                src="${user.avatar}"
                alt="${user.first_name + user.last_name}"
              />
            </div>
            <h3 class="Card__username">${user.first_name}</h3>
            <small class="Card__usermail">${user.email}</small>
            <div class="Card__actions">
              <a href="/#/users/${user.id}">Review</a>
            </div>
          </div>
          
        `).join("\n")}
        </div>
      </section>

    `
  },
};

export default HomeScreen;
