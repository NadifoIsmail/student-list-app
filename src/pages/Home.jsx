import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap'

export default function Home({students}) {
    
  return (
    <Container>
      <Row className="g-4">
        {students.map((student) => (
            <Col key= {student.id}  md={3} className="mb-4">
                <Card>
                    <Card.Img variant="top" src={student.image} alt={`${student.name}'s profile`}/>
                    <Card.Body>
                        <Card.Title><strong>{student.name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Student's Age:</strong> {student.age}
                        </Card.Text>
                        <Card.Text>
                            <strong>Student's Course:</strong> {student.course}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
    </Container>
  )
}
