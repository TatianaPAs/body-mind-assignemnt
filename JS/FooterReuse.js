class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
      <footer>
        <div class="footer-row">
            <div class="footer-col">
                <img src="Images/logo.png" class="logo" alt="logo" />
                <p>
                    Our mission is to teach as many people as possible how to practise yoga and meditation.
                </p>
            </div>
            <div class="footer-col">
                <h3>Contact</h3>
                <p>Auckland</p>
                <p> Manukau Station Road</p>
                <p>2104</p>
                <p class="footer-email"><a href=" mailto:info@body-mind.co.nz"> info@body-mind.co.nz</a></p>
                <p>+64 022 123 123</p>
            </div>
            <div class="footer-col">
                <h3>Menu</h3>
                <div class="footer-links">
                    <ul>
                        <li><a href="index.html">Home Page</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="yoga.html">Yoga</a></li>
                        <li><a href="meditation.html">Meditation</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-col">


                <h3>Subscribe to our Newsletter</h3>
                <form class="footer-form">
                    <input type="email" placeholder="Enter your email" id="email1" required />
                    <button type="button" id="hide">Submit</button>
                </form>

                <p class="thanks">Thank you!</p>


                <div class="social-icons">
                    <a href="https://www.facebook.com/"> <img src="Images/Facebook.png" alt="Facebook icon" /></a>
                    <a href="https://twitter.com/"><img src="Images/Twitter.png" alt="Twitter icon" /></a>
                    <a href="https://www.instagram.com/?hl=en"> <img src="Images/Instagram.png" alt="Instagram icon" /></a>
                    <a href="https://www.youtube.com/"><img src="Images/YouTube.png" alt="YouTube icon" /></a>
                </div>
            </div>
        </div>
        <hr />
        <p class="copyr">502.525 Front-End Web Development Assignment project made by Tatiana Pasechnik. 2021</p>

    </footer>
    `;
    }
}
customElements.define('main-footer', Footer);