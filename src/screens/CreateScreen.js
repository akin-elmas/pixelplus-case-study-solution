const UsersScreen = {
  after_render: () => {
   
    document
      .querySelector('#memberForm')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.querySelector("#memberName").value;
        const job = document.querySelector("#memberJob").value;
        const data = JSON.stringify({name, job});
        
        fetch('https://reqres.in/api/users', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: data,
          })
          .then(response => response.json())
          .then(data => {
            alert("Basarili")
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          
       
      });
    
  },
  render: async () => {
  
   
    return `
    <div class="MemberCreate">
    <h1 class="MemberCreate__title">Create Member</h1>
        <form id="memberForm" class="MemberCreate__form">
          <div class="MemberCreate__inp">
              <input type="text" class="MemberCreate__control" id="memberName" placeholder="name">
          </div>
          <div class="MemberCreate__inp">
              <input type="text" class="MemberCreate__control" id="memberJob" placeholder="job">
          </div>
          <button type="submit" class="btn btn-primary" id="petSubmitButton">Create</button>
          <a href="/">Back</a>
          
        </form>
    </div>
    `;
  },



};

export default UsersScreen;
