const UsersScreen = {
  after_render: () => {
   
    document
      .querySelector('#memberForm')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        alert("basildi");
        
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
