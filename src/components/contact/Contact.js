import "./Contact.scss";
export default function Contact() {
  return (
    <div className="Contact">
      <h1 class="sm:text-2xl text-2xl font-medium title-font text-center pt-3">
        Contact Me
      </h1>
      <br />
      <p class="text-center">
        <button class="contact-btn">
          <a
            href="mailto:kerry91warnes@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Send me an email
          </a>
        </button>
      </p>
    </div>
  );
}
