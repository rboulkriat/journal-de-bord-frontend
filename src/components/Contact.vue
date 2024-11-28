<template>
  <div class ="background-contact">
  <div class="contact-page">
      <h1 class="title">Nous Contacter</h1>
      <p class="description">
        Une question, un avis ou simplement envie de nous écrire ? Remplissez le formulaire ci-dessous.
      </p>

      <!--Message de confirmation-->
      <div v-if="successMessage" class="success-message">
      {{ successMessage }}
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form" v-if="!formSubmitted">
        <div class="form-group">
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            :class="{ 'is-invalid': errors.name }"
            placeholder="Votre nom complet"
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            :class="{ 'is-invalid': errors.email }"
            placeholder="Votre adresse email"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
  
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            :class="{ 'is-invalid': errors.message }"
            placeholder="Votre message..."
            rows="5"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>
  
        <button type="submit" class="btn-submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import '@/assets/contact.css';
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
        errors: {},
        successMessage: '', // Pour afficher le message de succès
        formSubmitted: false, 
      };
    },
    methods: {
      handleSubmit() {
        this.errors = this.validateForm();
        if (Object.keys(this.errors).length === 0) {
            this.successMessage = 
                'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.';
            this.formSubmitted = false; 
            this.resetForm();
        }
      },
      validateForm() {
        const errors = {};
        if (!this.form.name.trim()) errors.name = 'Le nom est requis.';
        if (!this.form.email.trim() || !this.isValidEmail(this.form.email))
          errors.email = "L'email est invalide.";
        if (!this.form.message.trim())
          errors.message = 'Le message ne peut pas être vide.';
        return errors;
      },
      isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
      resetForm() {
        this.form = {
          name: '',
          email: '',
          message: '',
        };
      },
    },
  };
  </script>
  