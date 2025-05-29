import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="footer_container">
          <div className="footer_content">
            <div className="footer_logo">
              <a href="#">
                <div className="logo d-flex flex-row align-items-center justify-content-center">
                  <img src="images/dot.png" alt="" />
                  <div>
                    Sport<span>fit</span>
                  </div>
                </div>
              </a>
            </div>
            <nav className="footer_nav">
              <ul className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Classes &amp; Services</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="newsletter_container">
              <form action="#" id="newsletter_form" className="newsletter_form">
                <input
                  type="text"
                  className="newsletter_input"
                  placeholder="Enter your email here"
                  required="required"
                />
                <button className="newsletter_button">go</button>
              </form>
            </div>
           
          </div>
          <div className="footer_image text-center">
            <img src="images/footer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
