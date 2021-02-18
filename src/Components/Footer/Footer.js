import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
        Bill Hicks: <br />
          "Why is marijuana against the law? It grows naturally upon our planet. Doesn’t the idea of making nature against the law seem to you a bit . . . unnatural?"{" "}
        </Card.Text>
        <div className="icons">
          <FaFacebook className="fb" />
          <FaYoutube />
          <FaInstagram />
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        Pot-head
      </Card.Footer>
    </Card>
        
  );
};

export default Footer;
