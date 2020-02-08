import { waitingEvent } from './async/callback';

document.addEventListener('DOMContentLoaded', () => {
  rBtn.onclick = () => {
    let users = [];
    try {
      users = JSON.parse(localStorage.users);
    } catch (e) {}

    users.push({
      name: rName.value,
      password: rPass.value,
    });

    localStorage.users = JSON.stringify(users);
  };

  lBtn.onclick = () => {
    let users = [];
    try {
      users = JSON.parse(localStorage.users);
    } catch (e) {}

    const currentUser = users.find(({ name, password }) => {
      return lName.value === name && lPass.value === password;
    });

    if (!currentUser) {
      alert('UNSUCCESS');
    } else {
      alert('SUCCESS');
    }
  };
});
