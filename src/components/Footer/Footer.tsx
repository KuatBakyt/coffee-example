import type React from "react";
import { Container, Row, Col } from "react-bootstrap";
import type { FooterProps } from "../../config/FooterProps";

const Footer: React.FC<FooterProps> = () => {
    return (
            <footer className="bg-dark text-light py-3 mt-auto">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p className="mb-0">&copy; 2025 Coffee Like</p>
                        </Col>
                        <Col md={6} className="text-md-end">
                            <p className="mb-0">Made with ❤️ in React</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}

export default Footer