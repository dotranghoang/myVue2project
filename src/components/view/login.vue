<template>
  <b-container fluid="">
    <b-row>
      <b-col class="text-center"></b-col>
      <b-col cols="6">
        <div>
          <!-- Header -->
          <div class="header">
            <b-container>
              <div class="header-body text-center mb-7">
                <b-row class="text-center">
                  <b-col>
                    <h1 class="text-white">Welcome!</h1>
                    <h5 class="text-lead text-white">Login or create new account</h5>
                  </b-col>
                </b-row>
              </div>
            </b-container>
            <div class="separator separator-bottom separator-skew zindex-100">
              <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
              </svg>
            </div>
          </div>
          <!-- Page content -->
          <b-container class="clear">
            <b-row>
              <b-col></b-col>
              <b-col xl="5" lg="6" md="8"  class="formClear">
                <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="input-1"
                  >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Enter name"
                        required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4" slot="4">
                    <b-form-checkbox-group
                        v-model="form.checked"
                        id="checkboxes-4"
                    >
                      <b-form-checkbox>Remember Me</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
                </div>
              </b-col>
              <b-col></b-col>
            </b-row>
          </b-container>
        </div>
      </b-col>
      <b-col class="text-center"></b-col>
    </b-row>
    <footer class="py-5" id="footer-main">
      <b-container>
        <b-row align-v="center" class="justify-content-xl-between">
          <b-col xl="6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{ year }} <a href="https://www.creative-tim.com" class="font-weight-bold ml-1 text-light" target="_blank">Rick</a>
            </div>
          </b-col>
          <b-col xl="6" class="nav-link col-xl-6">
            <b-nav class="nav-footer justify-content-center justify-content-xl-end">
              <b-nav-item href="https://www.creative-tim.com" target="_blank">
                Creative Tim
              </b-nav-item>
              <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank">
                About Us
              </b-nav-item>
              <b-nav-item href="http://blog.creative-tim.com" target="_blank">
                Blog
              </b-nav-item>
              <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
                License
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </b-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.header {
  color: white;
  font-weight: bold;
  padding-top: 50px;
  text-align: center;
}
.formClear {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  text-align: center;
}

.clear {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
}

.nav-link {
  color: whitesmoke;
}

footer {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  position: absolute;  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

.copyright {
  color: whitesmoke;
}
</style>