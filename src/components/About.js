import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Picabout from "../Asserts/Picabout.jpg";
import abNatal from "../Asserts/abNatal.jpg";
import nadya from "../Asserts/nadya.jpg";
import sveta from "../Asserts/sveta.jpg";
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

  h2,
  h3,
  h4,
  p,
  li,
  ul {
    color: white;
  }
`;

export const About = () => (
  <>
    <Styles>
      <div className="text-light fixednon">
        <div className="pt-4 text-center rounded-3 ">
          <div className=" py-0 ">
            <h1 className="text-emphasis ">Нам можно доверять: </h1>
            <p className="lead adeptPe">
              Архитектурно-дизайнерское бюро "STATUS" на рынке с 2010 года. На
              проятжении многих лет реализует различные проекты, выполняет
              качественно работу, создает весь проектный дизайнерский цикл, что
              позволяет долгосрочно дружить с заказчиками. У нас лучшая команда
              классных специлаистов с многолетним опытом работы в индустрии
              дизайн от разработки коммуникативного дизайна до дизайн
              проектирования совершенно любых объектов: жилых, коммерческих и
              муниципальных.
            </p>
          </div>
        </div>

        <div className=" my-0 ">
          <div className="p-3 text-center rounded-3">
            <h1 className="text-emphasis">Дизайнеры нашей компании</h1>
            <p className="lead">
              постоянно совершенствуются, что позволяет предлагать заказчикам
              новейшие идеи для реализации. И самое главное реализовывать
              поставленные цели. Эффективно и детально прорабатывать все
              проектные дизайн решения, что значительно уменьшает сроки
              строительных работ, так и общую стоимость.
            </p>
          </div>

          <div>
            <img
              src={Picabout}
              className="rounded mx-auto d-block img-fluid"
              alt="Picabout"
              style={{ height: "500px", width: "900px" }}
            />
          </div>
        </div>
      </div>

      <section className="about my-3" id="about">
        <h3 className="text-center py-3"> Наша команда</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                className="img-fluid rounded-3"
                src={abNatal}
                alt="Ekaterina"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content">
              <h3>Екатерина Великая</h3>
              <p className="font-italic">Опыт работы: с 2007 года</p>
              <p className="font-italic">
                Председатель Союза Дизайнеров России в г. Сочи с 2022 г.
              </p>
              <p className="font-italic">
                Арт-директор журнала Art Gallary с 2023 г.
              </p>
              <p className="font-italic">
                Член Союза Архитекторов России с 2013 г.
              </p>
              <p className="font-italic">
                Член Союза Дизайнеров России в г.Сочи с 2010 г.
              </p>

              <ul>
                <li>
                  Развитие и реализация программ поддрежки креативных индустрий
                  на территории Сочи
                </li>
                <li>Полный цикл дизайна от проектирования до реализации</li>
                <li>Экспертное мнение по диайнерскому проекту</li>
              </ul>
              <p>
                «Дизайнер понимает, что достиг совершенства не тогда, когда ему
                нечего добавить, а тогда, когда нечего убрать». Антуан де
                Сент-Экзюпери
              </p>

              <div className="text-center">
                <a href="https://wa.me/79184055993" target="_blank ">
                  <button type="button" className="btn btn-outline-light ">
                    Написать Екатерине
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about my-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                className="img-fluid rounded-3"
                src={nadya}
                alt="Ekaterina"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content">
              <h3>Надежда Коваленко</h3>
              <p className="font-italic">Опыт работы: с 2019 года</p>
              <p className="font-italic">
                Член Союза Дизайнеров России. г. СОЧИ
              </p>
              <p>Васту Эксперт</p>
              <p className="font-italic">
                Участник выставки DESIGN PRO 2022 "Жилые пространства"
              </p>
              <p className="font-italic">
                Участник выставки ФОКУС "Строительство Архитектура Дизайн 2022"
              </p>
              <p className="font-italic">
                Авторские публикации в журнале ART GALLERY с 2023
              </p>
              <ul>
                <li>
                  Знаю как сделать дом, местом силы! Как сонастроить 5
                  элементов, и пространство зазвучит на тонком уровне
                  гармонично,что принес в ваш дом желаемое:Радость, счастье,
                  финансы, успех, карьеру мечты, процветание.{" "}
                </li>
                <li>
                  Васту - самый быстрый способ изменить энергетику вашего дома!
                </li>
                <li>
                  В дизайне предпочитаю, смешение стилей: например, в
                  лаконичность и сдержанность добавляю немного шарма и
                  эпатажности. Атмосфера становится выразительнее, при этом не
                  теряя свою утонченность!
                </li>
              </ul>
              <p>
                И помним о том:"Наш дом оказывает большое влияние на нашу
                судьбу!"
              </p>

              <div className="text-center">
                <a href="https://wa.me/79631612833" target="_blank ">
                  <button type="button" className="btn btn-outline-light ">
                    {" "}
                    Написать Надежде
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about my-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                className="img-fluid rounded-3"
                src={sveta}
                alt="Ekaterina"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content">
              <h3>Светлана Томилина</h3>
              <p className="font-italic">Опыт работы: с 2019 года</p>
              <p className="font-italic">
                Статус: действующий дизайнер, член Союза Дизайнеров России.
              </p>
              <ul>
                <li>Знание стилей и трендов</li>
                <li>Технические навыки: чертежи и планы </li>
                <li>Обучение и саморазвитие</li>
              </ul>
              <p>
                В своих проектах стремлюсь раскрыть потенциал и функциональность
                каждого помещения. Мой подход основан на открытом диалоге и
                внимании к деталям. Я с удовольствием помогу создать
                пространство, в котором будет комфортно и приятно.{" "}
              </p>

              <div className="text-center">
                <a href="https://wa.me/79183004489" target="_blank ">
                  <button type="button" className="btn btn-outline-light ">
                    Написать Светлане
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  </>
);
