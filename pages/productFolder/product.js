import image1 from "../../public/box-spring-bed-with-tall-head-and-footboards-13-600x450.jpg";
import image2 from "../../public/bunk-bed-with-6-drawers-and-sloped-stairs-platform-base-6-600x450.jpg";
import image3 from "../../public/bunk-bed-with-6-drawers-and-stairs-platfrm-base-2-600x443.jpg";
import image4 from "../../public/bunk-bed-with-stairs-no-trundle-platform-base-3-600x450.jpg";
import image5 from "../../public/canopy-bed-with-compound-angle-joints-and-headboard-12-600x450.jpg";
import image6 from "../../public/canopy-bed-with-headboard-and-low-platform-wide-width-large-rail-and-canopy-1-600x450.jpg";
import image7 from "../../public/cantilever-platform-bed-with-4-drawers-and-headboard-with-top-bar-4-600x442.jpg";
import image8 from "../../public/CdRsP01_OF-600x400.jpg";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { useSession } from "next-auth/client";

import AccessDenied from "../components/accessDenied";

export default function Product({ Component, pageProps }) {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <Card style={{ width: "18rem" }}>
        <Image src={image1} alt="image 1" />
        <Card.Body>
          <Card.Title>Latest from Adrian Bush</Card.Title>
          <Card.Text>Latest from this artist.</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image2} alt="image 1" />
        <Card.Body>
          <Card.Title>From Albert Weands newest collection.</Card.Title>
          <Card.Text>Latest from this artist.</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image3} alt="image 1" />
        <Card.Body>
          <Card.Title>From Albert Weands newest collection.</Card.Title>
          <Card.Text>Latest from this artist.</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image4} alt="image 1" />
        <Card.Body>
          <Card.Title>From Alex Trevinos newest collection.</Card.Title>
          <Card.Text>Latest from this artist</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image5} alt="image 1" />
        <Card.Body>
          <Card.Title>Best Seller!</Card.Title>
          <Card.Text>From Florence Auguys new collection!</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image6} alt="image 1" />
        <Card.Body>
          <Card.Title>Best Seller!</Card.Title>
          <Card.Text>From Florence Auguys new collection!</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image7} alt="image 1" />
        <Card.Body>
          <Card.Title>Best Seller!</Card.Title>
          <Card.Text>From Florence Auguys new collection!</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image src={image8} alt="image 1" />
        <Card.Body>
          <Card.Title>Best Seller!</Card.Title>
          <Card.Text>From Florence Auguys new collection!</Card.Text>
          <Button variant="primary">Go to listing</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
