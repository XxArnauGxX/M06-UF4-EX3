import { deleteBtn, userIdInput, messageParagraph, helloWorldTitle } from './domElements.js';
import { deleteUser } from './deleteUser.js';

// Evento para el botón de eliminar usuario
deleteBtn.addEventListener('click', () => {
  const userId = userIdInput.value.trim();

  if (!userId) {
    alert('Por favor, introduce un ID de usuario');
    return;
  }

  const confirmDelete = confirm(`¿Estás seguro que quieres eliminar el usuario con ID ${userId}?`);
  if (confirmDelete) {
    deleteUser(userId);
  } else {
    messageParagraph.innerText = 'Operación cancelada por el usuario.';
    messageParagraph.style.color = 'blue';
  }
});
