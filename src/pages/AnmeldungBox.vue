<template>
  <q-page>
    <head>
      <title>Loginbox</title>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
      />
      <!--<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      />-->
    </head>

    <body>
      <!--Login/Regestrier Box-->
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <!--Wechsel zwischen Einloggen und Registrieren-->
                <h6 class="mb-0 pb-3">
                  <span>Einloggen</span><span>Registrieren</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <!--Login Karte-->
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Einloggen</h4>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-style"
                              placeholder="Email"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              class="form-style"
                              placeholder="Passwort"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>

                          <a @click="login" class="btn mt-4">Login</a>

                          <p class="mb-0 mt-4 text-center">
                            <a @click="resetPassword" class="link"
                              >Passwort vergessen?</a
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--Registrier Karte-->
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-3 pb-3">Registrieren</h4>

                          <div class="form-group mt-2" style="font-weight: 600">
                            <input
                              type="email"
                              class="form-style"
                              placeholder="Email"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              class="form-style"
                              placeholder="Passwort"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a @click="register" class="btn mt-4">Registrieren</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </q-page>
</template>

//
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 1.7;
  background-color: #f7f7fa;
}
a:hover {
  text-decoration: none;
}
.link {
  color: #152565;
}
.link:hover {
  color: #f7f7fa;
}
h4 {
  font-weight: 600;
  color: #f7f7fa;
}
h6 span {
  padding: 0 20px;
  font-weight: 700;
}
.section {
  max-width: 500px;
  display: block;
  margin: 0 auto;
}
.full-height {
  min-height: 100vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  display: none;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #f7f7fa;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #152565;
  background-color: #888;
  font-family: "unicons";
  content: "\eb4f";
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}
.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #888;
  position: absolute;
  border-radius: 6px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}
.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #f7f7fa;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  align-items: center;
  background-color: #f7f7fa;
  color: #152565;
}
.btn:hover {
  background-color: #152565;
  color: #f7f7fa;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}
</style>

<script>
/* import { auth } from "src/plugin/firebase.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      resetEmail: "",
    };
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Erfolgreich angemeldet
        })
        .catch((error) => {
          // Fehler bei der Anmeldung
        });
    },

    register() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Erfolgreich registriert
        })
        .catch((error) => {
          // Fehler bei der Registrierung
        });
    },
    resetPassword() {
      auth
        .sendPasswordResetEmail(this.resetEmail)
        .then(() => {
          // Zurücksetzungs-E-Mail wurde gesendet
        })
        .catch((error) => {
          // Fehler beim Senden der Zurücksetzungs-E-Mail
        });
    },
  },
}; */
</script>
