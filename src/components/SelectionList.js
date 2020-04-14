import React, { Component } from 'react';
import PlaceholderAside from './PlaceholderAside'
import Card from 'react-bootstrap/Card'
import './SelectionList.css'

class SelectionList extends Component {
  // componentDidMount(){
  //   window.caches.selectedVenues = this.props.selectedVenues.length > 0 ? this.props.selectedVenues : window.caches.selectedVenues
  // }

  render() {
    return (
      <div>
            {
              // (window.caches.selectedVenues && window.caches.selectedVenues.length > 0) ? (
              (this.props.selectedVenues.length > 0) ? (
                <ul>
                  {
                    // window.caches.selectedVenues.map((venue, index) => {
                    this.props.selectedVenues.map((venue, index) => {
                      return (
                        <div key={index}>
                          <Card id='container-info'>
                            <Card.Img 
                              id='image-select'
                              variant="top" 
                              src={`https://maps.googleapis.com/maps/api/streetview?size=200x100&location=${venue.location.lat},${venue.location.lng}&fov=90&heading=235&pitch=10&key=AIzaSyDicFQoRWREO_gX1sTklPjE8Kjhni7qmQU`}

                            />
                            <Card.Body id='content-select'>
                              <Card.Title id='title-select'> 
                                {venue.name} 
                              </Card.Title>
                              <Card.Text id='description-select'>
                                {venue.categories[0].name}
                              </Card.Text>
                            <Card.Link id='link-details' href='({venueId: venue.id})}'>
                              Show details
                            </Card.Link>
                            </Card.Body>
                          </Card>
                        </div>
                      )
                    })
                  }
                </ul>
              )
              : <PlaceholderAside />
            }
      </div>
    );
  }
}

export default SelectionList;