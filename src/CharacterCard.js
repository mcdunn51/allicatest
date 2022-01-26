import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const [homePlanet, setHomePlanet] = useState();

  const getHomePlanet = (homeworld) => {
    axios({
      method: "get",
      url: `${homeworld}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.data && res.data.name) {
        setHomePlanet(res.data.name);
      }
      // setTimeout(() => {
      //   setLoading(false);
      // }, 60000);
      // if (res.data.results && res.data.results.length > 0) {
      //   setCharacters(res.data.results);
      // } else setError(true);
    });
    //   .catch((error) => {
    //     setLoading(false);
    //     setError(true);
    //   });
  };

  useEffect(() => {
    getHomePlanet(character.homeworld);
  }, []);

  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Gender:{character.gender}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Home planet:{homePlanet ? homePlanet : null}
            </Card.Subtitle>
            <Link to="/characterDetails">
              <Card.Link>Character details</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CharacterCard;
