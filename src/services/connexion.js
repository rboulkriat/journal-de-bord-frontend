// Récupérer les utilisateurs depuis le localStorage ou initialiser la liste
const users = JSON.parse(localStorage.getItem('users')) || [
    { email: "test@example.com", password: "password123", username: "testuser" },
    { email: "toto@toto.com", password: "toto123", username: "toto" },
];

// Classe ConnexionService
class ConnexionService {
    constructor(usersList) {
        this.usersList = usersList;
    }

    // Vérifier si l'utilisateur existe dans la liste (connexion)
    login(email, password) {
        const user = this.usersList.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            return { success: true, message: `Bienvenue, ${user.username}!` };
        } else {
            return { success: false, message: "Email ou mot de passe incorrect." };
        }
    }

    // Ajouter un nouvel utilisateur (inscription)
    register(email, password, username) {
        const existingUser = this.usersList.find((u) => u.email === email);
        if (existingUser) {
            return { success: false, message: "Cet email est déjà utilisé." };
        } else {
            // Ajouter l'utilisateur à la liste
            this.usersList.push({ email, password, username });
            // Sauvegarder la liste dans le localStorage
            localStorage.setItem('users', JSON.stringify(this.usersList));
            return { success: true, message: "Inscription réussie !" };
        }
    }

    // Récupérer la liste des utilisateurs
    getUsers() {
        return this.usersList;
    }
}

// Exporter une instance unique de ConnexionService
export const connexionService = new ConnexionService(users);
