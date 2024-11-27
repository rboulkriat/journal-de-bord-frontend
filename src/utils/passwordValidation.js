// Fonction pour vérifier si deux mots de passe sont identiques et respectent les règles de sécurité
export const validatePasswords = (password, confirmPassword) => {
    // Vérification des champs vides
    if (!password || !confirmPassword) {
        return { valid: false, message: "Les mots de passe ne peuvent pas être vides." };
    }

    // Vérification si les mots de passe correspondent
    if (password !== confirmPassword) {
        return { valid: false, message: "Les mots de passe ne correspondent pas." };
    }

    // Vérification de la longueur du mot de passe
    if (password.length < 6 || password.length > 14) {
        return { valid: false, message: "Le mot de passe doit contenir entre 6 et 14 caractères." };
    }

    // Vérification de la présence d'une lettre majuscule
    if (!/[A-Z]/.test(password)) {
        return { valid: false, message: "Le mot de passe doit contenir au moins une lettre majuscule." };
    }

    // Vérification de la présence d'un chiffre
    if (!/\d/.test(password)) {
        return { valid: false, message: "Le mot de passe doit contenir au moins un chiffre." };
    }

    // Si toutes les conditions sont remplies
    return { valid: true, message: "Les mots de passe sont valides." };
};
