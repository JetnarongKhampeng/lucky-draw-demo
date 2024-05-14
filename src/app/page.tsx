'use client'

import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [winnerPrize, setWinnerPrize] = useState<any>([{ id: 0, text: '', path: '' }])

  const prize = [
    { id: 1, prize: "You got vacuum cleaner", text: 'Vacuum cleaner🧹', path: '/cleaner.svg' },
    { id: 2, prize: "You got",text: 'Money 💸', path: '/money.svg' },
    { id: 3, prize: "Thank you for joining in the fun",text: 'Thank you 😱 ', path: '/thanks.png' },
    { id: 4, prize: "Thank you for joining in the fun",text: 'Thankyou 🫣', path: '/thanks.png' },
    { id: 5, prize: "You got apple watch",text: 'Apple Watch ⌚️', path: '/apple.svg' },
    { id: 6, prize: "Thank you for joining in the fun",text: 'Thank you 😋', path: '/thanks.png' },
    { id: 7, prize: "Thank you for joining in the fun",text: 'Thank you 🙏', path: '/thanks.png' },
  ]

  function onRandomPrize() {
    var item = prize[Math.floor(Math.random() * prize.length)];
    if(item.id == 2){
      let getMoney = Math.floor(Math.random() * 9999999);
      
      item.prize = item.prize+" "+numberWithCommas(getMoney)+" baht"
    }
    
    setWinnerPrize(item)
    setShow(true)

  }

  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


  return (
    <div>

      <Modal
        size="sm"
        centered
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleClose}
        contentClassName="model-prize"
      >
        <Modal.Body>
          <Row>
            <Col sm={12} className="mt-5">
              <img src={winnerPrize.path} width={150} alt="" />
            </Col>
            <Col sm={12} className="mt-2">
              Congratulations !
            </Col>
            <Col sm={12}>
              {winnerPrize.prize}
            </Col>

          </Row>
          <Button variant="dark" className="mt-3" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>


      <Container>

        <Row style={{ alignContent: 'center' }}>
          <Col sm={12}>
            <p className="title-game">Which reward you will get?</p>
          </Col>
          <Col sm={12}>
            <div className="d-flex justify-content-center">
              {/* <div id="wrapper"> */}

              <div className="wheel">
                <div className="inner-wheel">
                  {prize.map((item) =>
                    <div className="sec"><span className={`fa text-${item.id}`} key={item.id}>{item.text}</span></div>
                  )}
                </div>

                <div className="spin">
                  <img src="/Ellipse 10.svg" alt="" />
                  {/* <div id="inner-spin"></div> */}
                </div>

                {/* <div id="shine"></div> */}
              </div>


              {/* <div id="txt"></div> */}
              {/* </div> */}
            </div>

          </Col>

          <Col sm={12}>
            <Button style={{backgroundColor: "#ffff !important"}} className="btn-spin" variant="light" onClick={onRandomPrize}>Spinnnn !</Button>
          </Col>
        </Row>
      </Container>
    </div>

  );
}
