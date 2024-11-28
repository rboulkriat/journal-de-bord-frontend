// services/userService.js
export const userService = {
    changePassword(currentPassword, newPassword) {
      // Simulate a backend API call to change the password
      if (currentPassword === 'oldPassword' && newPassword.length >= 8) {
        return { success: true, message: 'Mot de passe changé avec succès!' };
      } else {
        return { success: false, message: 'Erreur lors du changement de mot de passe.' };
      }
    },
  
    changeName(firstName, lastName) {
      // Simulate a backend API call to change the name
      if (firstName && lastName) {
        return { success: true, message: 'Nom et prénom changés avec succès!' };
      } else {
        return { success: false, message: 'Veuillez remplir tous les champs.' };
      }
    },
  
    changeTheme(themeColor) {
      // Simulate changing theme color (you can add local storage or API call logic here)
      document.body.style.backgroundColor = themeColor; // Example action
      return { success: true, message: 'Couleur du thème changée!' };
    },
  
    changeEmail(newEmail) {
      // Simulate a backend API call to change the email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(newEmail)) {
        return { success: true, message: 'Email changé avec succès!' };
      } else {
        return { success: false, message: 'Email invalide.' };
      }
    },
  
    deleteAccount() {
      // Simulate a backend API call to delete the account
      return { success: true, message: 'Compte supprimé avec succès!' };
    }
  };
  