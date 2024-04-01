import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Advertise() {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row   align-items-center justify-content-center text-center shadow  "
          style={{ height: "200vh" }}
        >
          <div className="col-6 col-md-6 shadow ">
            <form>
              <div className="">
                <Card className="shadow" style={{ height: "50vh" }}>
                  <Card.Header>Advertise#1</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content. With supporting text below as a
                      natural lead-in to additional content. With supporting
                      text below as a natural lead-in to additional content.
                      With supporting text below as a natural lead-in to
                      additional content. With supporting text below as a
                      natural lead-in to additional content. With supporting
                      text below as a natural lead-in to additional content.
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      type="button"
                      class="btn btn-primary "
                      style={{ width: "200px" }}
                    >
                      Bid
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
              <div className="mt-4">
                <Card className="" style={{ height: "50vh" }}>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {" "}
                    <Button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ width: "200px" }}
                    >
                      Bid
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
              <div className="mt-4">
                <Card className="" style={{ height: "50vh" }}>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {" "}
                    <Button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ width: "200px" }}
                    >
                      Bid
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
              <div className="mt-4">
                <Card className="" style={{ height: "50vh" }}>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>hello</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {" "}
                    <Button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ width: "200px" }}
                    >
                      Bid
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
