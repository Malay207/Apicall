/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
const Carditem = (props) => {
    return (
        <div className='row'>
            {
                props.item.map((item) => {
                    return (
                        <div key={item.id} className="col-md-4 mb-3 col-sm-6">
                            <Card className='me-0'>
                                <Card.Img style={{
                                    height: '200px',
                                    width: '100%',
                                    objectFit: "contain"

                                }} variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.tagline}
                                    </Card.Text>
                                    <Card.Text>
                                        first_brewed:{item.first_brewed}
                                    </Card.Text>
                                    <Card.Text >
                                        abv:{item.abv}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
                )
            }

        </div >
    )
}

export default Carditem