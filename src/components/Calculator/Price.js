import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormText, FormControl, FormGroup, FormCheck } from "react-bootstrap";
import { dataPlus } from "./dataPlus";
import styled from "styled-components";

const Styles = styled.div`
a {
padding: 6px;
text-decoration: none;
color: white;
}

a:hover {
color: black;
}

.cvet {
   background-color: #d4dde4;
  }

  
h2, h3, h4, p, li, ul, h5 {
color: white;
}

span {
float: right;
font-size: smaller;
text-decoration: none;
    color: #adb1b8;
    &:hover {
    color: black;
}
`;

const updateServises = dataPlus.map((service) => ({
  ...service,
  isOrder: false,
}));

function Price() {
  const [show, setShow] = useState(false); // кнопка скрыть показать есь перечень услуг
  const [services, setServices] = useState(updateServises); // при выборе услуги чекбокс
  const [totalsum, setTotalsum] = useState(); // для функции подсчета после выбора чекабокса
  const [square, setSquare] = useState(); // это состояние при вводе пользователем в инпут кв м.

  const handlClick = () => {
    setShow((show) => !show);
  };

  const handleCheck = (e, id) => {
    const checkedServices = services.map((service) => {
      if (service.id === id) {
        return { ...service, isOrder: e.target.checked };
      }
      return service;
    });
    setServices(checkedServices);
  };

  function checkedSum() {
    let baseSum = services.slice(0, 21).reduce(function (sum, service) {
      if (service.isOrder) return sum + service.price;
      else return sum;
    }, 0);

    let result = baseSum * square;

    services.forEach((service) => {
      if ((service.id === 22 || service.id === 23) && service.isOrder) {
        result += service.price;
      }

      if ((service.id === 24 || service.id === 25) && service.isOrder) {
        result += (result * service.price) / 100;
      }
    });
    console.log(result);
    setTotalsum(result.toLocaleString());
  }

  const onChangeEvent = (e) => {
    setSquare(e.target.value);
  };

  return (
    <Styles>
      <div className="d-grid gap-2 col-6 mx-auto ">
        <button
          className="btn btn-outline-light text-center"
          type="button"
          onClick={handlClick}
        >
          Рассчитай свой вариант<span>развернуть</span>
        </button>
        {show &&
          dataPlus.map((element) => {
            const { id, service, price, vol, unc, znak } = element;

            return (
              <FormGroup
                key={id}
                className="form-check"
                controlId="fromBasicKvadrat"
              >
                <FormCheck
                  type="checkbox"
                  onChange={(e) => handleCheck(e, id)}
                />
                <p>
                  {" "}
                  {service} {price} {vol} {unc} {znak}{" "}
                </p>
              </FormGroup>
            );
          })}

        {show && (
          <>
            <FormGroup>
              <h5>Сколько квадратных метров ваш объект?</h5>
              <FormControl
                type="text"
                placeholder="введите цифру или цифру через точку: 28 или 28.9"
                onChange={onChangeEvent}
                value={square}
              ></FormControl>
              <FormText className="text-muted"></FormText>
            </FormGroup>

            <div className="text-center">
              <button
                onClick={checkedSum}
                type="button"
                className="btn btn-outline-light text-center m-2"
              >
                {" "}
                Рассчитать
              </button>
              <button
                onClick={() => setTotalsum(null)}
                type="button"
                className="btn btn-outline-light text-center m-2 "
              >
                {" "}
                Очистить
              </button>
            </div>
            <div className="text-center">
              <h3> Общая стоимость: {totalsum} ₽ </h3>
            </div>
          </>
        )}
      </div>
    </Styles>
  );
}

export default Price;
