import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";

export default function Home(){
    return (
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                    <h2>Home</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi repudiandae quas delectus autem recusandae expedita minus nostrum perferendis laudantium, exercitationem nemo aliquam blanditiis odit earum, maiores adipisci officiis, debitis velit!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi repudiandae quas delectus autem recusandae expedita minus nostrum perferendis laudantium, exercitationem nemo aliquam blanditiis odit earum, maiores adipisci officiis, debitis velit!</p>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}