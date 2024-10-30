import {} from "react-bootstrap";
import React from "react";
// import ikonteg from '../Asserts/ikonteg.png'
// // import ikonwh from '../Asserts/iconwh.png'
// import ikonvk from '../Asserts/iconvk.png'

import styled from "styled-components";

const Styles = styled.div`
  a {
    padding: 6px;
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: white;
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

export const Contact = () => (
  <>
    <Styles>
      <h2 className="text-center pt-4 py-4">Контакты</h2>

      <section className="about my-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-lg-0 order-2 order-lg-1 content map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.151824188208!2d39.72636178963084!3d43.582553856998636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cbd5be430555%3A0xfc0ac1348b7b5fec!2z0J_QtdGA0LLQvtC80LDQudGB0LrQsNGPINGD0LsuLCAyNiwg0KHQvtGH0LgsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTQwMDA!5e0!3m2!1sru!2sru!4v1723312836250!5m2!1sru!2sru"
                width="450"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="contact"
              ></iframe>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <h3>STATUS</h3>
              <h4 className="font-italic">
                Архитектурно-дизайнерское бюро полного цикла
              </h4>
              <p className="font-italic">
                Адрес: г.Сочи, ул. Первомайская, д. 26, офис 404
              </p>
              <p className="font-italic">
                Телефон:{" "}
                <a href="tel:+79631612833">
                  8 800 250 28 38 и +7 963 161 28 33{" "}
                </a>
              </p>
              <p className="font-italic">
                Email:{" "}
                <a href="mailto:Statusprojects@mail.ru" target="_blank ">
                  {" "}
                  Statusprojects@mail.ru
                </a>
              </p>
              <p className="font-italic">Связаться с нами:</p>

              <div className="pt-1 py-4">
                <div className="icon-box">
                  <a href="https://t.me/design_buroSP" target="_blank ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/interior_design_sochi_1"
                    target="_blank "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 15.001953 18 L 10.966797 18.001953 C 10.966797 18.001953 10.735897 17.988941 10.457031 18.025391 C 10.178165 18.061841 9.7661948 18.078761 9.34375 18.556641 L 9.3417969 18.558594 L 9.3398438 18.560547 C 8.9640794 18.990267 8.9784173 19.490413 9.0253906 19.765625 C 9.0721906 20.039824 9.1769621 20.244579 9.1777344 20.246094 L 9.1777344 20.248047 C 9.2165294 20.343227 12.146379 27.521928 15.839844 31.378906 C 18.445099 34.101283 21.231404 35 23.712891 35 L 25 35 C 25.42346 35 25.801654 34.98073 26.220703 34.763672 C 26.639753 34.546613 27 33.94757 27 33.482422 C 27 32.981247 27.012312 32.495404 27.076172 32.224609 C 27.135819 31.971721 27.112802 32.033791 27.136719 32.033203 C 27.160692 32.038405 27.204328 32.048513 27.287109 32.085938 C 27.465502 32.166587 27.741146 32.346633 28.046875 32.583984 C 28.657377 33.057945 29.380504 33.745554 30.191406 34.277344 C 31.352856 35.04712 32.613281 35 32.613281 35 L 36.769531 35 L 36.814453 34.996094 C 36.814453 34.996094 37.452209 34.981594 38.107422 34.580078 C 38.435028 34.379319 38.82436 34.011034 38.955078 33.458984 C 39.085796 32.906935 38.918888 32.327748 38.597656 31.818359 C 38.480305 31.631523 37.910631 30.80588 35.636719 28.787109 C 35.049256 28.26609 34.648638 27.897278 34.490234 27.701172 C 34.433996 27.631548 34.42928 27.638269 34.417969 27.634766 C 34.431219 27.600573 34.5626 27.32391 34.914062 26.867188 C 35.280366 26.391181 35.836997 25.727944 36.552734 24.816406 C 37.464977 23.654213 38.105035 22.536703 38.507812 21.59375 C 38.709203 21.122274 38.851959 20.694455 38.9375 20.306641 C 39.02304 19.918826 39.091299 19.59647 38.964844 19.136719 C 38.870524 18.794484 38.614371 18.487968 38.363281 18.326172 C 38.112191 18.164376 37.878094 18.103431 37.667969 18.064453 C 37.247723 17.986493 36.876935 18 36.53125 18 C 35.80744 18 32.589808 18.025391 32.324219 18.025391 C 32.012508 18.025391 31.515256 18.155199 31.285156 18.287109 C 30.713891 18.614265 30.535156 19.0625 30.535156 19.0625 L 30.480469 19.158203 L 30.449219 19.265625 C 30.449219 19.265625 29.716532 21.635827 28.962891 22.857422 L 28.960938 22.857422 C 28.074746 24.296534 27.41371 24.867373 27.123047 25.029297 C 27.092172 25.046497 27.109277 25.03736 27.087891 25.048828 C 27.065156 24.982615 27.036471 24.891447 27.017578 24.722656 C 26.975067 24.342427 27 23.806967 27 23.289062 C 27 21.854646 27.107725 20.960184 26.988281 20.113281 C 26.928559 19.68983 26.776516 19.21826 26.429688 18.855469 C 26.082858 18.492678 25.634863 18.3141 25.1875 18.210938 L 25.185547 18.210938 C 24.719313 18.10357 24.216872 18.011359 23.009766 18 C 21.471766 17.98566 20.470116 18.03334 19.580078 18.429688 L 19.570312 18.435547 L 19.5625 18.439453 C 19.210828 18.604643 18.933601 18.793991 18.689453 19.046875 C 18.567379 19.173317 18.422556 19.265395 18.322266 19.667969 C 18.272116 19.869256 18.266616 20.250091 18.494141 20.558594 C 18.721663 20.867097 19.040516 20.960144 19.228516 20.984375 C 19.193836 20.979875 19.376419 21.020055 19.517578 21.089844 C 19.658738 21.159634 19.781301 21.26012 19.8125 21.300781 L 19.8125 21.302734 C 19.79945 21.285784 19.935003 21.622642 19.970703 21.929688 C 20.006403 22.236732 20 22.484375 20 22.484375 L 19.998047 22.544922 L 20.003906 22.605469 C 20.003906 22.605469 20.065293 23.284928 20.033203 23.986328 C 20.017153 24.337028 19.972824 24.690015 19.914062 24.90625 C 19.910955 24.917687 19.909535 24.913678 19.90625 24.923828 C 19.655877 24.748968 19.078554 24.13969 18.283203 22.826172 C 17.547974 21.611109 16.859375 19.425781 16.859375 19.425781 L 16.84375 19.376953 L 16.826172 19.330078 C 16.826172 19.330078 16.697788 18.841896 16.130859 18.443359 C 15.59948 18.069284 15.09375 18.017578 15.09375 18.017578 L 15.001953 18 z M 14.769531 20 C 14.826731 20.02091 14.946311 20.063999 14.96875 20.074219 L 14.945312 20.003906 C 14.945312 20.003906 14.976103 20.074602 14.976562 20.076172 C 14.976816 20.076308 14.980369 20.078025 14.980469 20.078125 L 14.980469 20.080078 L 14.982422 20.080078 C 14.932162 20.044918 14.974769 20.079819 14.980469 20.087891 C 15.008089 20.182121 15.618693 22.285424 16.572266 23.861328 C 17.440943 25.295947 18.08272 26.099662 18.783203 26.580078 C 19.483009 27.060029 20.424029 27.010564 20.902344 26.761719 C 21.541579 26.429749 21.720259 25.88414 21.84375 25.429688 C 21.967241 24.975234 22.011297 24.514175 22.03125 24.078125 C 22.06932 23.246137 22.004207 22.565534 21.998047 22.498047 C 21.999047 22.460457 22.007951 22.135402 21.957031 21.697266 C 21.905701 21.255789 21.813696 20.707151 21.421875 20.15625 C 21.860763 20.09104 22.104431 19.991744 22.990234 20 C 24.119875 20.01063 24.291711 20.05776 24.736328 20.160156 C 24.978465 20.215996 25.005345 20.262255 24.982422 20.238281 C 24.959502 20.214301 24.980423 20.198281 25.007812 20.392578 C 25.062629 20.781082 25 21.777479 25 23.289062 C 25 23.715159 24.958857 24.316046 25.029297 24.945312 C 25.099687 25.574186 25.296238 26.378841 26.056641 26.849609 C 26.489901 27.117751 27.317569 27.209968 28.097656 26.775391 C 28.877743 26.340815 29.678254 25.507138 30.664062 23.90625 C 31.637852 22.327814 32.220192 20.252559 32.283203 20.033203 C 32.283203 20.033203 32.294311 20.025979 32.300781 20.021484 C 32.318451 20.022334 32.29597 20.025391 32.324219 20.025391 C 32.69463 20.025391 35.85506 20 36.53125 20 C 36.717284 20 36.798956 20.010015 36.9375 20.015625 C 36.88151 20.23153 36.806235 20.482942 36.667969 20.806641 C 36.342997 21.567438 35.785273 22.554225 34.978516 23.582031 C 34.283253 24.467494 33.743119 25.109741 33.330078 25.646484 C 32.917037 26.183228 32.592563 26.606593 32.457031 27.21875 C 32.3215 27.830907 32.580091 28.521341 32.933594 28.958984 C 33.287097 29.396628 33.724557 29.765223 34.308594 30.283203 C 36.508681 32.236432 36.869649 32.827649 36.904297 32.882812 L 36.904297 32.884766 C 36.941447 32.943676 36.917361 32.88443 36.931641 32.914062 C 36.806889 32.952953 36.658409 32.99693 36.644531 33 L 32.597656 33 L 32.591797 33 C 32.591797 33 31.847477 32.9756 31.294922 32.609375 L 31.292969 32.607422 L 31.291016 32.607422 C 30.706463 32.224555 29.99998 31.567954 29.273438 31.003906 C 28.910166 30.721882 28.540311 30.457615 28.111328 30.263672 C 27.682345 30.069729 27.138651 29.932231 26.566406 30.103516 C 25.73815 30.351416 25.278492 31.139669 25.130859 31.765625 C 25.024881 32.214969 25.040549 32.605726 25.037109 32.998047 C 25.008582 32.999549 25.033273 33 25 33 L 23.712891 33 C 21.680377 33 19.565895 32.379527 17.285156 29.996094 C 14.319982 26.899649 11.674463 20.911604 11.277344 20.001953 L 14.769531 20 z M 32.212891 20.007812 C 32.194741 20.011856 32.246666 20.015777 32.289062 20.019531 C 32.283325 20.022641 32.289551 20.016779 32.28125 20.021484 C 32.28041 20.004775 32.237287 20.002377 32.212891 20.007812 z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <a href="https://wa.me/79631612833" target="_blank ">
                  <button type="button" className="btn btn-outline-light ">
                    Написать WhatsApp
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