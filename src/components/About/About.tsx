import me from "../../assets/me.jpg";

const About = () => {

    return (
        <div className="container p-5 mt-3">
        <div className="row" style={{ maxHeight: "90rem" }}>
          <div
            className="col-sm-12 col-md-12 col-lg-6"
            style={{ maxHeight: "90rem" }}
          >
            <img src={me} className="img-fluid rounded-1" alt="..." />
          </div>
          <div
            className="col-sm-12 col-md-12 col-lg-6 "
            style={{ maxHeight: "90rem" }}
          >
            <div className="card bg-white border-0">
              <div className="card-body p-0">
                <div className="card-title">
                  <h3
                    className="fw-lighter mt-2 my-2 advent-pro-header"
                    style={{ letterSpacing: ".4rem" }}
                  >
                    William Nathanal Britton JR
                  </h3>
                </div>
                <p className="card-text lh-lg">
                  There isn’t anything particularly special about me—just
                  someone who had a camera, a computer, and a copy of Photoshop.
                  I started photography over 10 years ago, hoping to create
                  fantastic art with fantastic people. I love the beauty of
                  portraiture and lifestyle photography, and I’ve been inspired
                  by photographers like Dani Diamond and Lindsey Adler. Thank
                  you for stopping by to check out my work. Although I’m less
                  active in the photography world now, I still love to create.
                  This site is just a small collection of my work that I often
                  like to show off. I hope you enjoy it as much as I do. In the
                  footer of this site will be a link to my Linkedin if I could
                  ever be a help to anyone. <br />
                  Detroit, Michigan
                  <br />
                  <span className="fs-2"> ✌️ </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;