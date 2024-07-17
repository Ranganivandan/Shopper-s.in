import "./contact.css";


export function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <section class="contact-section">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or comments, please feel free to contact
            us using the form below.
          </p>
          <form
            action="/submit_contact_form"
            method="post"
            class="contact-form"
          >
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 @ Shopper's.In. All rights reserved.</p>
      </footer>
    </div>
  );
}
