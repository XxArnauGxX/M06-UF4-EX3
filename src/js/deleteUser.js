import { messageParagraph } from './domElements.js';

export async function deleteUser(userId) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      messageParagraph.innerText = `El usuario con ID ${userId} ha sido eliminado exitosamente (simulado).`;
      messageParagraph.style.color = 'green';
    } else {
      messageParagraph.innerText = 'No se ha podido eliminar el usuario. Verifica el ID.';
      messageParagraph.style.color = 'red';
    }
  } catch (error) {
    messageParagraph.innerText = 'Ocurrió un error en la petición.';
    messageParagraph.style.color = 'red';
  }
}
