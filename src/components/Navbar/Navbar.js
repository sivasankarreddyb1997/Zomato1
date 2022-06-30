import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="main-head">ZOMATO</h1>

        <div className="nav-links">
          <a href="https://www.zomato.com/">Login</a> |
          <a href="https://www.zomato.com">About</a> |
          <a href="https://www.zomato.com">Offers</a> |
          <a href="https://www.zomato.com">Place</a> |
          <a href="https://www.zomato.com">Help</a>
        </div>
      </div>
      {/* middle container */}
      <div className="middle-nav">
        <div className="left-nav">
          <div></div>
          <div className="middle-img">
            {/* top images */}
            <img src="images1/1.jpg" alt="zomato" />
            <img src="images1/2.jpg" alt="zomato" />
            <img src="images1/3.jpg" alt="zomato" />
            <img src="images1/4.jpg" alt="zomato" />
            <img src="images1/5.jpg" alt="zomato" />
            <img src="images1/6.jpg" alt="zomato" />
          </div>
          <h2 className="middle-title1">Quality Assurance</h2>
          {/* main content */}
          <p>
            Food is any substance consumed to provide nutritional support for an
            organism. Food is usually of plant, animal, or fungal origin, and
            contains essential nutrients, such as carbohydrates, fats, proteins,
            vitamins, or minerals. The substance is ingested by an organism and
            assimilated by the organism's cells to provide energy, maintain
            life, or stimulate growth. Different species of animals have
            different feeding behaviours that satisfy the needs of their unique
            metabolisms, often evolved to fill a specific ecological niche
            within specific geographical contextsFood is any substance consumed
            to provide nutritional support for an organism. Food is usually of
            plant, animal, or fungal origin, and contains essential nutrients,
            such as carbohydrates, fats, proteins, vitamins, or minerals.
          </p>
          {/* bottom images */}
          <div className="middle-img">
            <img src="images3/1.jpg" alt="zomato" />
            <img src="images3/2.jpg" alt="zomato" />
            <img src="images3/3.jpg" alt="zomato" />
            <img src="images3/4.jpg" alt="zomato" />
            <img src="images3/5.jpg" alt="zomato" />
            <img src="images3/6.jpg" alt="zomato" />
          </div>
        </div>
        {/* right sidebar images */}
        <div className="right-nav">
          <div className="middle-img">
            <img src="images2/1.jpg" alt="zomato" />
            <img src="images2/2.jpg" alt="zomato" />
            <img src="images2/3.jpg" alt="zomato" />
          </div>
          <h2 className="middle-title">Our Services</h2>
          {/* right side content */}
          <p className="right-para">
            Omnivorous humans are highly adaptable and have adapted to obtain
            food in many different ecosystems. Historically, humans secured food
            through two main methods: hunting and gathering and agriculture. As
            agricultural technologies increased, humans settled into agriculture
            lifestyles with diets shaped by the agriculture opportunities in
            their geography.Omnivorous humans are highly adaptable and have
            adapted to obtain food in many different ecosystems. Historically,
            humans secured food through two main methods: hunting and gathering
            and agriculture. As agricultural technologies increased two main
            methods: hunting and gathering and agriculture. As agricultural
            technologies increased, humans settled into agriculture lifestyles
            with diets shaped by the agriculture opportunities in their
            geography.Omnivorous humans are highly adaptable and have adapted to
            obtain food in many different ecosystems. Historically, humans
            secured food through two main methods: hunting and gathering and
            agriculture. As agricultural technologies increased{" "}
          </p>
        </div>
      </div>
      {/* bottom division */}
      <div className="bottom">
        <h3>Zomoto Services in : </h3>
        <address>
          Hyderabad, Bengaloru, Kerala, Andhra Pradesh & Tamilnadu
        </address>
      </div>
    </div>
  );
};

export default Navbar;
