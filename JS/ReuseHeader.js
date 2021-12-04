class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <section class="sub-header">
        <nav>
            <a href="index.html"><img class="logo-header" src="Images/logo.png" alt="logo" /></a>

            <div class="nav-links" id="navMenu">
                <img class="mini-menu" onclick="hideMenu()" src="Images/close.png" alt="close icon" />
                <div id="menu"></div>

            </div>
            <img class="mini-menu" onclick="openMenu()" src="Images/menu.png" alt="open icon" />
        </nav>

    </section>
    `;
    }
}

customElements.define('main-header', Header);